import { fetchApi } from "../fetch-api";
import { JsonFindApiResponse } from "../types/find-response";
import { Property } from "./type";

export type FindPropertyQuery = {
  s?: string;
};

export type PropertyWithAgent = [Property, string, string, string | null];

export const findProperties = async (query?: FindPropertyQuery) => {
  let path = "/properties?";
  if (query?.s) {
    path += `s=${query.s}`;
  }
  return await fetchApi<JsonFindApiResponse<PropertyWithAgent>>(path);
};
