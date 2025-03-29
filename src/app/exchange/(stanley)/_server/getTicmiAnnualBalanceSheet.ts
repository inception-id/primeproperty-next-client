import { TicmiResponse } from "./getTicmiAnnualMarketInfo";

export interface TicmiAnnualBalanceSheetData {
  data: TicmiAnnualBalanceSheet[];
  lastUpdate: string;
}

export interface TicmiAnnualBalanceSheet {
  asetAbstrak: AsetAbstrak;
  liabilitasDanEkuitasAbstrak: LiabilitasDanEkuitasAbstrak;
  period: string;
}

export interface AsetAbstrak {
  asetLancarAbstrak: AsetLancarAbstrak;
  Total: number;
  asetTidakLancarAbstrak: AsetTidakLancarAbstrak;
  aset: number;
}

export interface AsetLancarAbstrak {
  kasDanSetaraKas: number;
  Total: number;
  investasiJangkaPendek?: number;
  piutangUsahaAbstrak: PiutangUsahaAbstrak;
  piutangLainnyaAbstrak: PiutangLainnyaAbstrak;
  persediaanLancarAbstrak: PersediaanLancarAbstrak;
  biayaDibayarDimukaLancar: number;
  uangMukaLancarAbstrak: UangMukaLancarAbstrak;
  asetLancar: number;
  pajakDibayarDimukaLancar?: number;
}

export interface PiutangUsahaAbstrak {
  piutangUsahaPihakKetiga: number;
  Total: number;
}

export interface PiutangLainnyaAbstrak {
  piutangLainnyaPihakKetiga: number;
  Total: number;
}

export interface PersediaanLancarAbstrak {
  persediaanLancar: number;
  Total: number;
}

export interface UangMukaLancarAbstrak {
  uangMukaLancarLainnya: number;
  Total: number;
}

export interface AsetTidakLancarAbstrak {
  asetKeuanganTidakLancarAbstrak?: AsetKeuanganTidakLancarAbstrak;
  Total: number;
  asetTetap: number;
  asetTakberwujudSelainGoodwill: number;
  asetTidakLancarNonKeuanganLainnya: number;
  asetTidakLancar: number;
}

export interface AsetKeuanganTidakLancarAbstrak {
  asetKeuanganTidakLancarBiayaPerolehanDiamortisasi: number;
  Total: number;
}

export interface LiabilitasDanEkuitasAbstrak {
  liabilitasAbstrak: LiabilitasAbstrak;
  Total: number;
  ekuitasAbstrak: EkuitasAbstrak;
  liabilitasDanEkuitas: number;
}

export interface LiabilitasAbstrak {
  liabilitasJangkaPendekAbstrak: LiabilitasJangkaPendekAbstrak;
  Total: number;
  liabilitasJangkaPanjangAbstrak: LiabilitasJangkaPanjangAbstrak;
  liabilitas: number;
}

export interface LiabilitasJangkaPendekAbstrak {
  utangUsahaAbstrak: UtangUsahaAbstrak;
  Total: number;
  bebanAkrualJangkaPendek: number;
  liabilitasImbalanPascaKerjaJangkaPendek?: number;
  utangPajak: number;
  liabilitasJangkaPanjangYangJatuhTempoDalamSatuTahunAbstrak: LiabilitasJangkaPanjangYangJatuhTempoDalamSatuTahunAbstrak;
  liabilitasJangkaPendek: number;
  utangLainnyaAbstrak?: UtangLainnyaAbstrak;
}

export interface UtangUsahaAbstrak {
  utangUsahaPihakKetiga: number;
  Total: number;
}

export interface LiabilitasJangkaPanjangYangJatuhTempoDalamSatuTahunAbstrak {
  liabilitasJangkaPanjangYangJatuhTempoDalamSatuTahunAtasLiabilitasSewaPembiayaan: number;
  Total: number;
  liabilitasJangkaPanjangYangJatuhTempoDalamSatuTahunAtasUtangBank?: number;
}

export interface UtangLainnyaAbstrak {
  utangLainnyaPihakKetiga: number;
  Total: number;
}

export interface LiabilitasJangkaPanjangAbstrak {
  liabilitasPajakTangguhan: number;
  Total: number;
  liabilitasJangkaPanjangSetelahDikurangiBagianYangJatuhTempoDalamSatuTahunAbstrak: LiabilitasJangkaPanjangSetelahDikurangiBagianYangJatuhTempoDalamSatuTahunAbstrak;
  uangJaminanJangkaPanjang: number;
  kewajibanImbalanPascaKerjaJangkaPanjang: number;
  liabilitasJangkaPanjang: number;
}

export interface LiabilitasJangkaPanjangSetelahDikurangiBagianYangJatuhTempoDalamSatuTahunAbstrak {
  liabilitasJangkaPanjangAtasLiabilitasSewaPembiayaan: number;
  Total: number;
  liabilitasJangkaPanjangAtasUtangBank?: number;
}

export interface EkuitasAbstrak {
  ekuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak: EkuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak;
  Total: number;
  ekuitas: number;
}

export interface EkuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak {
  sahamBiasa: number;
  Total: number;
  tambahanModalDisetor: number;
  cadanganPengukuranKembaliProgramImbalanPasti: number;
  saldoLabaAkumulasiKerugianAbstrak: SaldoLabaAkumulasiKerugianAbstrak;
  ekuitasYangDiatribusikanKepadaPemilikEntitasInduk: number;
}

export interface SaldoLabaAkumulasiKerugianAbstrak {
  saldoLabaYangTelahDitentukanPenggunaannya: number;
  Total: number;
  saldoLabaYangBelumDitentukanPenggunaannya: number;
}

export const getTicmiAnnualBalanceSheet = async (
  stockCode: string,
): Promise<TicmiResponse<TicmiAnnualBalanceSheetData>> => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetBalanceSheetByEmitenCode",
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
