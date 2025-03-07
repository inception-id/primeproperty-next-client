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
export const findAllLanguages = async (): Promise<
  TApiResponse<TLanguage[]>
> => {
  try {
    return await fetchApi(`/languages/find-all`, {});
  } catch (e) {
    throw e;
  }
};
