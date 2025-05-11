import { PurchaseStatus } from "@/lib/enums/purchase-status";
import { fetchApi } from "../fetch-api";
import { JsonFindApiResponse } from "../types/find-response";
import { Property } from "./type";
import { BuildingType } from "@/lib/enums/building-type";

export enum FindPropertySort {
  LowestPrice = "LowestPrice",
  HighestPrice = "HighestPrice",
}

export type FindPropertyQuery = {
  province?: string;
  regency?: string;
  page?: string;
  purchase_status?: PurchaseStatus | string;
  buiding_type?: BuildingType | string;
  sort?: FindPropertySort | string;
};

export type PropertyWithAgent = [Property, string, string, string | null];

export const findProperties = async (query?: FindPropertyQuery) => {
  let path = "/properties?";
  if (query?.province) {
    path += `&province=${query.province}`;
  }
  if (query?.regency) {
    path += `&regency=${query.regency}`;
  }
  if (query?.page) {
    path += `&page=${query.page}`;
  }
  if (query?.purchase_status) {
    path += `&purchase_status=${query.purchase_status}`;
  }
  if (query?.buiding_type) {
    path += `&building_type=${query.buiding_type}`;
  }
  if (query?.sort) {
    path += `&sort=${query.sort}`;
  }
  return await fetchApi<JsonFindApiResponse<PropertyWithAgent>>(path);
};
