import { fetchApi } from "../fetch-api";
import { JsonFindApiResponse } from "../types/find-response";
import { Property } from "./type";

export type FindPropertyQuery = {
  s?: string;
  province?: string;
  regency?: string;
  page?: string;
};

export type PropertyWithAgent = [Property, string, string, string | null];

export const findProperties = async (query?: FindPropertyQuery) => {
  let path = "/properties?";
  if (query?.s) {
    path += `&s=${query.s}`;
  }
  if (query?.province) {
    path += `&province=${query.province}`;
  }
  if (query?.regency) {
    path += `&regency=${query.regency}`;
  }
  if (query?.page) {
    path += `&page=${query.page}`;
  }
  return await fetchApi<JsonFindApiResponse<PropertyWithAgent>>(path);
};
