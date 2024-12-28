import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTranslation } from "@/lib/api/translation/createTranslation";

export const updateTranslation = async (
  id: string,
  updated_completion: string,
): Promise<TApiResponse<TTranslation>> => {
  try {
    return await fetchApi(`/translation/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({ updated_completion }),
    });
  } catch (e) {
    throw e;
  }
};
