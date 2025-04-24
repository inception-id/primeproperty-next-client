"use server";
import { env } from "../env";

export type BpsResponse = {
  status: string;
  "data-availability": string;
  data: [BpsPagination, BpsDomain[]];
};

export type BpsPagination = {
  page: number;
  pages: number;
  total: number;
};

export type BpsDomain = {
  domain_id: string;
  domain_name: string;
  domain_url: string;
};

export const findBpsDomainProvince = async () => {
  const path = "/v1/api/domain/type/prov";

  try {
    const response = await fetch(
      `${env.BPS_API_URL}${path}/key/${env.BPS_API_KEY}`,
    );
    const resJson: BpsResponse = await response.json();
    if (resJson["data-availability"] !== "available") {
      return [];
    }

    return resJson.data[1];
  } catch (err) {
    console.error(`Error in $${path}: `, err);
    return [];
  }
};
