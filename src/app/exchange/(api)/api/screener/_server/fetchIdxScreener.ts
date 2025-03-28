"use server";

type TIdxScreener = {
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
  results: TIdxScreener[];
};

export const fetchIdxScreener = async (): Promise<Response> => {
  const url =
    "https://www.idx.co.id/support/stock-screener/api/v1/stock-screener/get?Sector=&SubSector=&npmMin=20&npmMax=1371.65&perMin=0&perMax=148516.82&pbvMin=0&pbvMax=312.9&roeMin=15&roeMax=2212.21";

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(222, response);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
