"use server"; // since we don't want to expose the API and ID to the client
import { fetchApi } from "../fetch-api";
import { Agent } from "./type";

type CreateAgentPayload = {
  supertokens_user_id: string;
  fullname: string;
  email: string;
  phone_number: string;
  profile_picture_url?: string | null;
};

export const createAgent = async (payload: CreateAgentPayload) => {
  return await fetchApi<Agent>(`/agents`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
