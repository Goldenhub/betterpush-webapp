import type { User } from "@/types";
import apiRequest from "@/utils/api";

export const getCurrentUser = async (): Promise<User> => {
  const res = await apiRequest.get<{ data: User }>("/users/me");
  return res.data.data || res.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const res = await apiRequest.get<{ data: User }>(`/users/${id}`);
  return res.data.data || res.data;
};

export const updateUser = async (data: { name?: string; username?: string; email?: string; avatar_url?: string }): Promise<User> => {
  const res = await apiRequest.patch<{ data: User }>("/users/me", data);
  return res.data.data || res.data;
};
