"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TLanguage } from "@/lib/api/languages/createLanguage";

type TUpdateLanguage = {
  title?: string;
  iso_639_1?: string;
};

export const updateLanguage = async (
  id: number,
  payload: TUpdateLanguage,
): Promise<TApiResponse<TLanguage>> => {
  try {
    return await fetchApi(`/languages/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
