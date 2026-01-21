// import AppContext from "@/lib/AppProvider";
import type { AuthResponse, LoginPayload, LogoutPayload, SignupPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";
// import { useContext } from "react";
import { login, logout, signup } from "../api";
import { AxiosError } from "axios";
import { API_URL } from "@/constants";
import { getDeviceId } from "@/lib/utils";

export function useSignup() {
  return useMutation<AuthResponse, AxiosError, SignupPayload>({
    mutationFn: signup,
  });
}

export function useLogin() {
  return useMutation<AuthResponse, AxiosError, LoginPayload>({
    mutationFn: login,
  });
}

export function useLogout() {
  return useMutation<AuthResponse, AxiosError, LogoutPayload>({
    mutationFn: logout,
  });
}

export function useGithubAuth() {
  const deviceId = getDeviceId();
  return `${API_URL}/auth/github/login?device_id=${deviceId}`;
}
