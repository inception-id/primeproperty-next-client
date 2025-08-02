import { fetchApi } from "../fetch-api";
import { PropertyWithAgent } from "./find-properties";

export type Agent = {
  id: string;
  supertokens_user_id: string;
  created_at: string;
  updated_at: string;
  fullname: string;
  email: string;
  phone_number: string;
  profile_picture_url: null | string;
  instagram: null | string;
  description: string | null;
};

export type AgentWithProperties = {
  agent: Agent;
  properties: PropertyWithAgent[];
};

export const findPropertyByAgent = async (name: string) => {
  return await fetchApi<AgentWithProperties>(`/properties/agents/${name}`);
};
