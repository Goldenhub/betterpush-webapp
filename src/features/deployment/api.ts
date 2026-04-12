import type { Project, Deployment, Repository, Team, CreateProjectData } from "@/types";
import apiRequest from "@/utils/api";
import { API_URL } from "@/constants";

// Provider Integration APIs (Vercel, Netlify, etc.)
export const getProviders = async () => {
  const res = await apiRequest.get<{ data: string[] }>("/integrations/providers");
  return res.data.data || [];
};

export const connectProvider = async (provider: string) => {
  const res = `${API_URL}/integrations/${provider}/connect`;
  return res;
};

export const handleProviderCallback = async (provider: string, code: string, state: string) => {
  const res = await apiRequest.get(`/integrations/${provider}/callback`, {
    params: { code, state },
  });
  return res.data;
};

// Repositories (from /repositories endpoint)
export const getRepositories = async () => {
  const res = await apiRequest.get<{ data: Repository }>("/repositories");
  return res.data.data || { repos: [], link: "" };
};

// Teams
export const getTeams = async (provider: string) => {
  const res = await apiRequest.get<{ data: Team[] }>("/deployments/teams", {
    params: { provider },
  });
  return res.data.data || [];
};

// Projects
export const createProject = async (projectData: CreateProjectData) => {
  const res = await apiRequest.post<{ data: Project }>("/deployments/projects", projectData);
  return res.data.data || res.data;
};

export const getProjects = async (provider: string, teamId?: string) => {
  const res = await apiRequest.get<{ data: Project[] }>("/deployments/projects", {
    params: { provider, teamId },
  });
  return res.data.data || [];
};

// Deployments
export const deploy = async (deploymentData: {
  name: string;
  teamId: string;
  project: string;
  gitHost: string;
  repo: string;
  branch: string;
  org: string;
  provider: string;
  framework: string;
}) => {
  const res = await apiRequest.post<{ data: Deployment }>("/deployments/deploy", deploymentData);
  return res.data.data || res.data;
};

// Deployment Stream (SSE)
export const getDeploymentStream = (provider: string, deploymentId: string) => {
  return new EventSource(`${API_URL}/deployments/${provider}/${deploymentId}/stream`);
};
