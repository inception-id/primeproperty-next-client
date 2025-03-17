"use server";

type TTicmiFinancialRatio = {
  period: string;
  PBV: number;
  EVPerEbitTTM: number;
  EVPerEbitdaTTM: any;
  EVPerRevenueTTM: number;
  ps: number;
  pe: number;
  eps: number;
  BVPS: number;
  cashRatio: number;
  currentRatio: number;
  ATO: number;
  NPM: number;
  GPM: number;
  DAR: number;
  DER: number;
  OPM: number;
  revenuePerShares: number;
  priceToCashflow: number;
  roa: number;
  roe: number;
  priceToFreeCashflow: number;
  netAssetsPerShare: number;
  cashflowPerShare: number;
  freeCashflowPerShare: number;
  quickRatio: number;
  EBITM: number;
};

type TResponse = {
  data: TTicmiFinancialRatio[];
};

export const fetchTicmiFinancialRatio = async (
  secCode: string,
): Promise<TResponse> => {
  const url = `https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetRasioKeuanganByEmitenCode?secCode=${secCode}&granularity=annually`;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjExMzMsImlwcyI6WzMyMV19.qT-9UO4CFWmJzuPzFb0Bn-s9TNGIm_YCSfDZrfavUQY";
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
