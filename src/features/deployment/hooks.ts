import { useQuery, useMutation } from "@tanstack/react-query";
import * as deploymentApi from "./api";

export const useProviders = () => {
  return useQuery({
    queryKey: ["providers"],
    queryFn: deploymentApi.getProviders,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useConnectProvider = () => {
  return useMutation({
    mutationFn: deploymentApi.connectProvider,
  });
};

export const useHandleProviderCallback = () => {
  return useMutation({
    mutationFn: ({ provider, code, state }: { provider: string; code: string; state: string }) =>
      deploymentApi.handleProviderCallback(provider, code, state),
  });
};

export const useRepositories = () => {
  return useQuery({
    queryKey: ["repositories"],
    queryFn: deploymentApi.getRepositories,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useTeams = (provider: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["teams", provider],
    queryFn: () => deploymentApi.getTeams(provider),
    enabled: enabled && !!provider,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useProjects = (provider: string, teamId?: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["projects", provider, teamId],
    queryFn: () => deploymentApi.getProjects(provider, teamId),
    enabled: enabled && !!provider,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: deploymentApi.createProject,
  });
};

export const useDeploy = () => {
  return useMutation({
    mutationFn: deploymentApi.deploy,
  });
};
