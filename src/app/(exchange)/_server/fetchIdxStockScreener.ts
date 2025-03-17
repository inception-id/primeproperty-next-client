"use server";

type TResponse = {
  results: { stockCode: string }[];
};

export const fetchIdxStockScreener = async (): Promise<TResponse> => {
  try {
    const url =
      "https://www.idx.co.id/support/stock-screener/api/v1/stock-screener/get?Sector=&SubSector=&npmMin=20&perMin=0&pbvMin=0&roeMin=15";
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
};
