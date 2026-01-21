import axios from "axios";
import type { FailedRequest, APIError } from "@/types";
import { toast } from "sonner";
import { refresh } from "@/features/auth/api";
import { triggerLogout } from "@/features/auth/logoutHandler";

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const BASE_URL = import.meta.env.VITE_API_URL;

const apiRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//Handler function for failedQueue
const processQueue = (error?: APIError | null | unknown) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  failedQueue = [];
};

const RETRY_FLAG = Symbol("retry");

//Response interceptor
apiRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 429) {
      const retryAfterHeader = error.response?.headers["retry-after"] || 60;
      const retryAfter = Number(retryAfterHeader);

      toast.error(`Too many requests. Please try again after ${retryAfter} seconds.`, { duration: 8000 });
      return Promise.reject(error);
    }

    // Not an auth error
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // Already retried
    if (originalRequest[RETRY_FLAG]) {
      return Promise.reject(error);
    }

    // Refresh already running
    if (isRefreshing) {
      return new Promise<void>((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => {
          return apiRequest(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    // first request to hit 401
    originalRequest[RETRY_FLAG] = true;
    isRefreshing = true;

    try {
      await refresh();

      isRefreshing = false;
      processQueue();

      return apiRequest(originalRequest);
    } catch (refreshError) {
      isRefreshing = false;
      processQueue(refreshError);

      triggerLogout();
      return Promise.reject(error);
    }
  }
);

export default apiRequest;
