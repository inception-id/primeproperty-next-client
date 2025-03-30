export type TIdxScreen = {
  companyName: string;
  stockCode: string;
  subIndustryCode: string;
  sector: string;
  subSector: string;
  industry: string;
  subIndustry: string;
  indexCode: string;
  marketCapital: number;
  tRevenue: number;
  npm: number;
  per: number;
  pbv: number;
  roa: number;
  roe: number;
  der: number;
  week4PC: number;
  week13PC: number;
  week26PC: any;
  week52PC: any;
  ytdpc: number;
  mtdpc: number;
  umaDate: any;
  notation: any;
  status: any;
  corpAction: string;
  corpActionDate: string;
};

type Response = {
  results: TIdxScreen[];
};

export const screenIdx = async (): Promise<Response> => {
  const url = new URL(
    "https://www.idx.co.id/support/stock-screener/api/v1/stock-screener/get",
  );
  url.searchParams.set("Sector", "");
  url.searchParams.set("SubSector", "");
  url.searchParams.set("npmMin", "20");
  url.searchParams.set("perMin", "0");
  url.searchParams.set("pbvMin", "0");
  url.searchParams.set("roeMin", "15");
  url.searchParams.set("derMax", "1");

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        Referer: "https://www.idx.co.id/",
        Accept: "application/json, text/plain, */*",
      },
    });
    console.log("Screen IDX response", response);
    return await response.json();
  } catch (error) {
    console.error("Screen IDX error", error);
    throw error;
  }
};
