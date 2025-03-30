import { fetchTicmi } from "./fetchTicmi";

export type TMarketInfo = {
  period: string;
  listedShares: number;
  close: number;
  marketCap: number;
  peringkatKapitalisasiPasar: number;
  enterpriseValue: number;
};

export const getMarketInfo = async (code: string) => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetInformasiPasarByEmitenCode",
  );
  url.searchParams.set("secCode", code);
  url.searchParams.set("granularity", "annually");
  try {
    return await fetchTicmi<TMarketInfo[]>(url.toString());
  } catch (error) {
    throw error;
  }
};
