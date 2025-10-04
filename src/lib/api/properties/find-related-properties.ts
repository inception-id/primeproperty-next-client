import { fetchApi } from "../fetch-api";
import { PropertyWithAgent } from "./find-properties";

export const findRelatedProperties = async (id: number) => {
  return await fetchApi<PropertyWithAgent[]>(`/properties/related/${id}`);
};
