import { fetchApi } from "../fetch-api";
import { Property } from "./type";

export const deleteProperty = async (id: number) => {
  return await fetchApi<Property>(`/properties/${id}`, {
    method: "DELETE",
  });
};
