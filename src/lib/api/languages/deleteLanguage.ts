"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TLanguage} from "@/lib/api/languages/createLanguage";

export const deleteLanguage= async (
  id: number,
): Promise<TApiResponse<TLanguage>> => {
  try {
    return await fetchApi(`/languages/delete/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    throw e;
  }
};
