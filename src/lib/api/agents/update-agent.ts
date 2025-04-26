"use server"; // since we don't want to expose the API and ID to the client
import { fetchApi } from "../fetch-api";
import { Agent } from "./type";

type UpdateAgentPayload = {
  fullname: string;
  phone_number: string;
  profile_picture_url?: string | null;
};

export const updateAgent = async (
  agentId: string,
  payload: UpdateAgentPayload,
) => {
  return await fetchApi<Agent>(`/agents/${agentId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
