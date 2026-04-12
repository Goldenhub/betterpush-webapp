import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as userApi from "./api";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: userApi.getCurrentUser,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUserById = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userApi.getUserById(id),
    enabled: enabled && !!id,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
};
