"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TUser = {
  id: string;
  supertokens_user_id: string | null;
  created_at: string;
  updated_at: string;
  email: string;
};

export const createUser = async (
  supertokens_user_id: string,
  email: string,
): Promise<TApiResponse<TUser>> => {
  try {
    return await fetchApi("/users/create-user", {
      method: "POST",
      body: JSON.stringify({ supertokens_user_id, email }),
    });
  } catch (e) {
    throw e;
  }
};
