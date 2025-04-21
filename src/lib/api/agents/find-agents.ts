import { fetchApi } from "../fetch-api";
import { Agent } from "./type";

export type FindAgentsQuery = {
  name_or_email?: string;
  page?: number;
};

export const findAgents = async (query?: FindAgentsQuery) => {
  const params = new URLSearchParams();
  if (query?.name_or_email) params.append("name_or_email", query.name_or_email);
  if (query?.page) params.append("page", String(query.page));
  return await fetchApi<Agent[]>(`/agents?${params.toString()}`);
};
