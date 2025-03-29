import { TicmiResponse } from "./getTicmiAnnualMarketInfo";

export interface TicmiCashFlowData {
  data: TicmiCashFlow[];
  lastUpdate: string;
}

export interface TicmiCashFlow {
  arusKasDariAktivitasOperasiAbstrak: ArusKasDariAktivitasOperasiAbstrak;
  arusKasDariAktivitasInvestasiAbstrak: ArusKasDariAktivitasInvestasiAbstrak;
  arusKasDariAktivitasPendanaanAbstrak: ArusKasDariAktivitasPendanaanAbstrak;
  kenaikanPenurunanBersihKasDanSetaraKas: number;
  kasDanSetaraKasArusKasAwalPeriode: number;
  efekPerubahanNilaiKursPadaKasDanSetaraKas: number;
  kasDanSetaraKasArusKasAkhirPeriode: number;
  period: string;
  kenaikanPenurunanKasDanSetaraKasLainnya?: number;
}

export interface ArusKasDariAktivitasOperasiAbstrak {
  penerimaanKasDariAktivitasOperasiAbstrak: PenerimaanKasDariAktivitasOperasiAbstrak;
  Total: number;
  pembayaranKasDariAktivitasOperasiAbstrak: PembayaranKasDariAktivitasOperasiAbstrak;
  kasDiperolehDariDigunakanUntukOperasi: number;
  penerimaanBungaDariAktivitasOperasi: number;
  pembayaranBungaDariAktivitasOperasi: number;
  penerimaanPengembalianPembayaranPajakPenghasilanDariAktivitasOperasi: number;
  pembayaranPajakPenghasilanBadan?: number;
  penerimaanPengeluaranKasLainnyaDariAktivitasOperasi: number;
  arusKasSebelumPerubahanDalamAsetDanLiabilitasYangDiperolehDariDigunakanUntukAktivitasOperasi: number;
  arusKasBersihYangDiperolehDariDigunakanUntukAktivitasOperasi: number;
  liabilitasJangkaPanjangAtasObligasiSubordinasi?: number;
}

export interface PenerimaanKasDariAktivitasOperasiAbstrak {
  penerimaanDariPelanggan: number;
  Total: number;
  penerimaanKasLainnyaDariAktivitasOperasi?: number;
}

export interface PembayaranKasDariAktivitasOperasiAbstrak {
  pembayaranKepadaPemasokAtasBarangDanJasa: number;
  Total: number;
  pembayaranGajiDanTunjangan: number;
  pembayaranRoyaltiDanIuranEksploitasi: number;
}

export interface ArusKasDariAktivitasInvestasiAbstrak {
  penerimaanDariPenjualanAsetTetap: number;
  Total: number;
  pembayaranUntukPerolehanAsetTetap: number;
  pembayaranUntukPerolehanPropertiPertambangan: number;
  pembayaranUntukPerolehanAsetTakberwujud?: number;
  pencairanPenempatanAsetKeuanganYangDiukurPadaNilaiWajarMelaluiLabaRugi?: number;
  pencairanPenempatanAsetKeuanganNilaiWajarMelaluiPendapatanKomprehensifLainnya: number;
  pencairanPenempatanDanaYangDibatasiPenggunaannyaDariAktivitasInvestasi: number;
  penerimaanPembayaranPiutangDariPihakBerelasi?: number;
  pembayaranPemberianPiutangKepadaPihakBerelasi: number;
  uangMukaDanPinjamanDiberikanKepadaPihakLainSelainInstitusiKeuangan: number;
  penerimaanPengembalianUangMukaDanPinjamanDiberikanKepadaPihakLain?: number;
  penerimaanDariPelepasanEntitasAnak?: number;
  pembayaranUntukPerolehanEntitasAnak?: number;
  pembayaranUntukPerolehanKepemilikanPadaEntitasVenturaBersama: number;
  penerimaanDividenDariAktivitasInvestasi?: number;
  penerimaanPengeluaranKasLainnyaDariAktivitasInvestasi?: number;
  arusKasBersihYangDiperolehDariDigunakanUntukAktivitasInvestasi: number;
  penerimaanDariPenjualanAsetNonKeuanganLainnya?: number;
}

export interface ArusKasDariAktivitasPendanaanAbstrak {
  penerimaanPinjamanBank: number;
  Total: number;
  pembayaranPinjamanBank: number;
  pembayaranLiabilitasSewaPembiayaan: number;
  penerimaanPinjamanLainnya?: number;
  pembayaranPinjamanLainnya: number;
  pembayaranBiayaEmisiSaham?: number;
  penerimaanDariPenjualanPembelianSahamTresuri?: number;
  obligasiSubordinasi?: number;
  pembayaranDividenDariAktivitasPendanaan: number;
  penerimaanPengeluaranKasLainnyaDariAktivitasPendanaan: number;
  arusKasBersihYangDiperolehDariDigunakanUntukAktivitasPendanaan: number;
  penerimaanDariPelepasanKepentinganDiEntitasAnakTanpaHilangnyaPengendalianDariKegiatanPendanaan?: number;
  pembayaranUntukPerolehanKepentinganPihakNonPengendaliPadaEntitasAnak?: number;
  penerimaanDariPenerbitanObligasi?: number;
}

export const getTicmiAnnualCashflow = async (
  stockCode: string,
): Promise<TicmiResponse<TicmiCashFlowData>> => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFScashFlow",
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
