"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TLanguage = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  iso_639_1: string;
};

export const createLanguage = async (
  title: string,
  iso_639_1: string,
): Promise<TApiResponse<TLanguage>> => {
  try {
    return await fetchApi("/languages/create", {
      method: "POST",
      body: JSON.stringify({ title, iso_639_1 }),
    });
  } catch (e) {
    throw e;
  }
};
