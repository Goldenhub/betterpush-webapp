import { getDeviceId } from "@/lib/utils";
import type { AuthResponse, LoginPayload, LogoutPayload, SignupPayload } from "@/types";
import apiRequest from "@/utils/api";
import refreshClient from "@/utils/refresh.client";

export const signup = async (data: SignupPayload): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/signup", data);
  return res.data;
};

export const verifyEmail = async (token: string): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/verify-email", { token });
  return res.data;
};

export const login = async (data: LoginPayload): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/login", data);
  return res.data;
};

export const logout = async (data: LogoutPayload) => {
  const res = await apiRequest.post("/auth/logout", data);
  return res.data;
};

export const forgotPassword = async (email: string): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/forgot-password", { email });
  return res.data;
};

export const resetPassword = async (token: string, password: string): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/reset-password", { token, password });
  return res.data;
};

export const createPassword = async (password: string): Promise<AuthResponse> => {
  const res = await apiRequest.patch("/auth/create-password", { password });
  return res.data;
};

export const refresh = async (): Promise<AuthResponse> => {
  const res = await refreshClient.post("/auth/refresh", {
    device_id: getDeviceId(),
  });
  return res.data;
};
