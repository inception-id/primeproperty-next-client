import { fetchTicmi, TicmiResponsneData } from "./fetchTicmi";

export interface TIncomeStatement {
  pendapatanDanBebanOperasionalAbstrak: PendapatanDanBebanOperasionalAbstrak;
  labaOperasional: number;
  pendapatanDanBebanBukanOperasionalAbstrak?: PendapatanDanBebanBukanOperasionalAbstrak;
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
}

export interface PendapatanDanBebanOperasionalAbstrak {
  pendapatanBunga: number;
  Total: number;
  bebanBunga: number;
  pendapatanPengelolaanDanaOlehBankSebagaiMudharib?: number;
  hakPihakKetigaAtasBagiHasilDanaSyirkahTemporer?: number;
  pendapatanAsuransiAbstrak?: PendapatanAsuransiAbstrak;
  bebanAsuransiAbstrak?: BebanAsuransiAbstrak;
  pendapatanDariPembiayaanAbstrak?: PendapatanDariPembiayaanAbstrak;
  pendapatanSekuritasAbstrak?: PendapatanSekuritasAbstrak;
  pendapatanOperasionalLainnyaAbstrak: PendapatanOperasionalLainnyaAbstrak;
  pemulihanPenyisihanKerugianPenurunanNilaiAbstrak: PemulihanPenyisihanKerugianPenurunanNilaiAbstrak;
  pembentukanKerugianPenurunanNilaiAbstrak: PembentukanKerugianPenurunanNilaiAbstrak;
  pembalikanBebanEstimasiKerugianKomitmenDanKontijensi?: number;
  bebanOperasionalLainnyaAbstrak: BebanOperasionalLainnyaAbstrak;
}

export interface PendapatanAsuransiAbstrak {
  pendapatanDariPremiAsuransi: number;
  Total: number;
  premiReasuransi: number;
  premiRetrosesi: number;
  penurunanKenaikanPremiYangBelumMerupakanPendapatan: number;
  penurunanKenaikanPendapatanPremiDisesikanKepadaReasuradur: number;
  pendapatanKomisiAsuransi: number;
  pendapatanBersihInvestasi: number;
  penerimaanUjrah: number;
  pendapatanAsuransiLainnya: number;
}

export interface BebanAsuransiAbstrak {
  bebanKlaim: number;
  Total: number;
  klaimReasuransi: number;
  klaimRetrosesi: number;
  kenaikanPenurunanEstimasiLiabilitasKlaim: number;
  kenaikanPenurunanLiabilitasManfaatPolisMasaDepan: number;
  kenaikanPenurunanProvisiYangTimbulDariTesKecukupanLiabilitas: number;
  kenaikanPenurunanLiabilitasAsuransiYangDisesikanKepadaReasuradur: number;
  kenaikanPenurunanLiabilitasPemegangPolisPadaKontrakUnitLinked: number;
  bebanKomisiAsuransi: number;
  ujrahDibayar: number;
  bebanAkuisisiDariKontrakAsuransi: number;
  bebanAsuransiLainnya: number;
}

export interface PendapatanDariPembiayaanAbstrak {
  pendapatanDariPembiayaanKonsumen: number;
  Total: number;
  pendapatanDariSewaPembiayaan: number;
  pendapatanDariSewaOperasi: number;
  pendapatanDariAnjakPiutang: number;
}

export interface PendapatanSekuritasAbstrak {
  pendapatanKegiatanPenjaminEmisiDanPenjualanEfek: number;
  Total: number;
  pendapatanPembiayaanTransaksiNasabah: number;
  pendapatanJasaBiroAdministrasiEfek: number;
  pendapatanKegiatanJasaManajerInvestasi: number;
  pendapatanKegiatanJasaPenasehatKeuangan: number;
  keuntunganKerugianDariTransaksiPerdaganganEfekYangTelahDirealisasi: number;
  keuntunganKerugianPerubahanNilaiWajarEfek: number;
}

export interface PendapatanOperasionalLainnyaAbstrak {
  pendapatanInvestasi?: number;
  Total: number;
  pendapatanProvisiDanKomisiDariTransaksiLainnyaSelainKredit?: number;
  pendapatanTransaksiPerdagangan: number;
  pendapatanDividen: number;
  keuntunganKerugianYangTelahDirealisasiAtasInstrumenDerivatif: number;
  penerimaanKembaliAsetYangTelahDihapusbukukan?: number;
  keuntunganKerugianSelisihKursMataUangAsing?: number;
  keuntunganKerugianPelepasanAsetTetap?: number;
  keuntunganKerugianPelepasanAgunanYangDiambilAlih?: number;
  pendapatanOperasionalLainnya: number;
}

export interface PemulihanPenyisihanKerugianPenurunanNilaiAbstrak {
  pemulihanPenyisihanKerugianPenurunanNilaiAsetKeuangan: number;
  Total: number;
  pemulihanPenyisihanKerugianPenurunanNilaiAsetKeuanganSewaPembiayaan?: number;
  pemulihanPenyisihanKerugianPenurunanNilaiAsetKeuanganPiutangPembiayaanKonsumen?: number;
  pemulihanPenyisihanKerugianPenurunanNilaiAsetNonKeuangan?: number;
  pemulihanPenyisihanKerugianPenurunanNilaiAsetNonKeuanganAgunanYangDiambilAlih?: number;
  pemulihanPenyisihanEstimasiKerugianAtasKomitmenDanKontinjensi?: number;
}

export interface PembentukanKerugianPenurunanNilaiAbstrak {
  pembentukanPenyisihanKerugianPenurunanNilaiAsetProduktif: number;
  Total: number;
  pembentukanPenyisihanKerugianPenurunanNilaiAsetNonProduktif: number;
}

export interface BebanOperasionalLainnyaAbstrak {
  bebanUmumDanAdministrasi: number;
  Total: number;
  bebanPenjualan?: number;
  bebanSewaPemeliharaanDanPerbaikan?: number;
  bebanProvisiDanKomisi: number;
  bebanOperasionalLainnya: number;
}

export interface PendapatanDanBebanBukanOperasionalAbstrak {
  pendapatanBukanOperasional: number;
  Total: number;
  bebanBukanOperasional: number;
  bagianAtasLabaRugiEntitasAsosiasiYangDicatatDenganMenggunakanMetodeEkuitas: number;
  bagianAtasLabaRugiEntitasVenturaBersamaYangDicatatMenggunakanMetodeEkuitas: number;
}

export interface PendapatanKomprehensifLainnyaSebelumPajakAbstrak {
  pendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak: PendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak;
  Total: number;
  pendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak: PendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak;
  pendapatanKomprehensifLainnyaSebelumPajak: number;
}

export interface PendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak {
  pendapatanKomprehensifLainnyaAtasKeuntunganKerugianHasilRevaluasiAsetTetapSebelumPajak: number;
  Total: number;
  pendapatanKomprehensifLainnyaAtasPengukuranKembaliKewajibanManfaatPastiSebelumPajak: number;
  penyesuaianLainnyaAtasPendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajak?: number;
  pendapatanKomprehensifLainnyaYangTidakAkanDireklasifikasiKeLabaRugiSebelumPajak: number;
}

export interface PendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajakAbstrak {
  keuntunganKerugianSelisihKursPenjabaranSebelumPajak: number;
  Total: number;
  penyesuaianReklasifikasiSelisihKursPenjabaranSebelumPajak?: number;
  keuntunganKerugianYangBelumDirealisasiAtasPerubahanNilaiWajarAsetKeuanganMelaluiPenghasilanKomprehensifLainSebelumPajak: number;
  penyesuaianReklasifikasiAtasAsetKeuanganNilaiWajarMelaluiPendapatanKomprehensifLainnyaSebelumPajak?: number;
  keuntunganKerugianLindungNilaiArusKasSebelumPajak?: number;
  penyesuaianReklasifikasiAtasLindungNilaiArusKasSebelumPajak?: number;
  nilaiTercatatDariAsetLiabilitasNonKeuanganYangPerolehanAtauKeterjadiannyaMerupakanSuatuPrakiraanTransaksiYangKemungkinanBesarTerjadiYangDilindungNilaiSebelumPajak?: number;
  keuntunganKerugianLindungNilaiInvestasiBersihKegiatanUsahaLuarNegeriSebelumPajak?: number;
  penyesuaianReklasifikasiAtasLindungNilaiInvestasiBersihKegiatanUsahaLuarNegeriSebelumPajak?: number;
  bagianPendapatanKomprehensifLainnyaDariEntitasAsosiasiYangDicatatDenganMenggunakanMetodeEkuitasSebelumPajak?: number;
  bagianPendapatanKomprehensifLainnyaDariEntitasVenturaBersamaYangDicatatDenganMenggunakanMetodeEkuitasSebelumPajak?: number;
  penyesuaianLainnyaAtasPendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajak: number;
  pendapatanKomprehensifLainnyaYangAkanDireklasifikasiKeLabaRugiSebelumPajak: number;
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
  labaRugiPerSahamDasarDariOperasiYangDihentikan?: number;
}

export interface LabaRugiPerSahamDilusianAbstrak {
  labaRugiPerSahamDilusianDariOperasiYangDilanjutkan: number;
  Total: number;
  labaRugiPerSahamDilusianDariOperasiYangDihentikan?: number;
}

export const getIncomeStatement = async (code: string) => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetIncomeStatementByEmitenCode",
  );
  url.searchParams.set("secCode", code);
  url.searchParams.set("granularity", "annually");
  try {
    return await fetchTicmi<TicmiResponsneData<TIncomeStatement[]>>(
      url.toString(),
    );
  } catch (error) {
    throw error;
  }
};
