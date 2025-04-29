import { fetchApi } from "../fetch-api";
import { PropertyWithAgent } from "./find-properties";

export const findPropertyById = async (id: number) => {
  return await fetchApi<PropertyWithAgent>(`/properties/${id}`);
};
