"use server";
import { env } from "../env";
import { BpsResponse } from "./find-bps-domain-province";

export const findBpsDomainProvinceRegency = async (provId: string) => {
  const path = `/v1/api/domain/type/kabbyprov/prov/${provId}`;

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
