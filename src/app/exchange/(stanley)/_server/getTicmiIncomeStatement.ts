import { TicmiResponse } from "./getTicmiAnnualMarketInfo";

export interface TicmiIncomeStatementData {
  data: TicmiIncomeStatement[];
  lastUpdate: string;
}

export interface TicmiIncomeStatement {
  penjualanDanPendapatanUsaha: number;
  bebanPokokPenjualanDanPendapatan: number;
  labaBruto: number;
  bebanPenjualan: number;
  bebanUmumDanAdministrasi: number;
  pendapatanKeuangan: number;
  bebanBungaDanKeuangan: number;
  keuntunganKerugianSelisihKursMataUangAsing: number;
  bagianAtasLabaRugiEntitasVenturaBersamaYangDicatatMenggunakanMetodeEkuitas: number;
  keuntunganKerugianPerubahanNilaiWajarEfek?: number;
  bebanPajakFinal?: number;
  pendapatanLainnya: number;
  bebanLainnya: number;
  labaRugiSebelumPajakPenghasilan: number;
  pendapatanBebanPajak: number;
  labaRugiDariOperasiYangDilanjutkan: number;
  labaRugiDariOperasiYangDihentikan?: number;
  labaRugi: number;
  pendapatanKomprehensifLainnyaSebelumPajakAbstrak: PendapatanKomprehensifLainnyaSebelumPajakAbstrak;
  pajakAtasPendapatanKomprehensifLainnya: number;
  pendapatanKomprehensifLainnyaSetelahPajak: number;
  labaRugiKomprehensif: number;
  labaRugiYangDapatDiatribusikanAbstrak: LabaRugiYangDapatDiatribusikanAbstrak;
  labaRugiKomprehensifYangDapatDiatribusikanAbstrak: LabaRugiKomprehensifYangDapatDiatribusikanAbstrak;
  labaRugiPerSahamAbstrak: LabaRugiPerSahamAbstrak;
  period: string;
  pendapatanBunga?: number;
  keuntunganKerugianAtasInstrumenKeuanganDerivatif?: number;
}

export interface PendapatanKomprehensifLainnyaSebelumPajakAbstrak {
  pendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak: PendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak;
  Total: number;
  pendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak: PendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak;
  pendapatanKomprehensifLainnyaSebelumPajak: number;
}

export interface PendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak {
  pendapatanKomprehensifLainnyaAtasPengukuranKembaliKewajibanManfaatPastiSebelumPajak: number;
  Total: number;
  penyesuaianLainnyaAtasPendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajak: number;
  pendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajak: number;
}

export interface PendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak {
  keuntunganKerugianSelisihKursPenjabaranSebelumPajak: number;
  Total: number;
  keuntunganKerugianYangBelumDirealisasiAtasPerubahanNilaiWajarAsetKeuanganMelaluiPenghasilanKomprehensifLainSebelumPajak: number;
  bagianPendapatanKomprehensifLainnyaDariEntitasVenturaBersamaYangDicatatDenganMenggunakanMetodeEkuitasSebelumPajak: number;
  pendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajak: number;
  keuntunganKerugianLindungNilaiArusKasSebelumPajak?: number;
}

export interface LabaRugiYangDapatDiatribusikanAbstrak {
  labaRugiYangDapatDiatribusikanKeEntitasInduk: number;
  Total: number;
  labaRugiYangDapatDiatribusikanKeKepentinganNonPengendali: number;
}

export interface LabaRugiKomprehensifYangDapatDiatribusikanAbstrak {
  labaRugiKomprehensifYangDapatDiatribusikanKeEntitasInduk: number;
  Total: number;
  labaRugiKomprehensifYangDapatDiatribusikanKeKepentinganNonPengendali: number;
}

export interface LabaRugiPerSahamAbstrak {
  labaPerSahamDasarDiatribusikanKepadaPemilikEntitasIndukAbstrak: LabaPerSahamDasarDiatribusikanKepadaPemilikEntitasIndukAbstrak;
  Total: number;
  labaRugiPerSahamDilusianAbstrak: LabaRugiPerSahamDilusianAbstrak;
}

export interface LabaPerSahamDasarDiatribusikanKepadaPemilikEntitasIndukAbstrak {
  labaRugiPerSahamDasarDariOperasiYangDilanjutkan: number;
  Total: number;
}

export interface LabaRugiPerSahamDilusianAbstrak {
  labaRugiPerSahamDilusianDariOperasiYangDilanjutkan: number;
  Total: number;
}

export const getTicmiIncomeStatement = async (
  stockCode: string,
): Promise<TicmiResponse<TicmiIncomeStatementData>> => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetIncomeStatementByEmitenCode",
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
