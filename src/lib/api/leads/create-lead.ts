"use server";
import { env } from "@/lib/env";
import { fetchApi } from "../fetch-api";

export type Lead = {
  id: number;
  user_id: string;
  property_id: number;
  created_at: string;
  updated_at: string;
  name: string;
  phone_number: string;
  email: any;
  is_deleted: boolean;
};

type CreateLeadPayload = {
  user_id: string;
  property_id: string;
  name: string;
  phone: string;
  email: string;
};

export const createLead = async (payload: CreateLeadPayload) => {
  return fetchApi<Lead>("/leads", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": env.API_KEY_LEADS,
    },
  });
};
