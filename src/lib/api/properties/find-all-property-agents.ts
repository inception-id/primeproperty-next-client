import { fetchApi } from "../fetch-api";
import { Agent } from "./find-property-by-agent";

export const findAllPropertyAgents = async () => {
  return await fetchApi<Agent[]>(`/properties/agents`);
};
