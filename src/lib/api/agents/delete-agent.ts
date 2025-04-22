"use server"; // since we don't want to expose the API and ID to the client
import { fetchApi } from "../fetch-api";
import { Agent } from "./type";

export const deleteAgent = async (agentId: string) => {
  return await fetchApi<Agent>(`/agents/${agentId}`, {
    method: "DELETE",
  });
};
