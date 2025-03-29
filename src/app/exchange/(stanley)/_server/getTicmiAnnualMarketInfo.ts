export type TicmiResponse<T> = { data: T };

export type TicmiAnnualMarketInfo = {
  period: string;
  listedShares: number;
  close: number;
  marketCap: number;
  peringkatKapitalisasiPasar: number;
  enterpriseValue: number;
};

export const getTicmiAnnualMarketInfo = async (
  stockCode: string,
): Promise<TicmiResponse<TicmiAnnualMarketInfo[]>> => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetInformasiPasarByEmitenCode",
  );
  url.searchParams.set("secCode", stockCode);
  url.searchParams.set("granularity", "annually");
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjExMzMsImlwcyI6WzMyMV19.qT-9UO4CFWmJzuPzFb0Bn-s9TNGIm_YCSfDZrfavUQY";
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};
