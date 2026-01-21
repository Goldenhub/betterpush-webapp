import { getDeviceId } from "@/lib/utils";
import type { AuthResponse, LoginPayload, LogoutPayload, SignupPayload } from "@/types";
import apiRequest from "@/utils/api";
import refreshClient from "@/utils/refresh.client";

//Signup
export const signup = async (data: SignupPayload): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/signup", data);
  return res.data;
};

//Login
export const login = async (data: LoginPayload): Promise<AuthResponse> => {
  const res = await apiRequest.post("/auth/login", data);
  return res.data;
};

//Logout
export const logout = async (data: LogoutPayload) => {
  const res = await apiRequest.post("/auth/logout", data);
  return res.data;
};

//Refresh
export const refresh = async (): Promise<AuthResponse> => {
  const res = await refreshClient.post("/auth/refresh", {
    device_id: getDeviceId(),
  });
  return res.data;
};
