import { fetchTicmi, TicmiResponsneData } from "./fetchTicmi";

export interface TBalanceSheet {
  asetAbstrak: AsetAbstrak;
  liabilitasDanaSyirkahTemporerDanEkuitasAbstrak: LiabilitasDanaSyirkahTemporerDanEkuitasAbstrak;
  period: string;
}

interface AsetAbstrak {
  kas: number;
  Total: number;
  danaYangDibatasiPenggunaannya?: number;
  giroPadaBankIndonesia: number;
  giroPadaBankLainAbstrak: GiroPadaBankLainAbstrak;
  penempatanPadaBankIndonesiaDanBankLainAbstrak: PenempatanPadaBankIndonesiaDanBankLainAbstrak;
  piutangAsuransiAbstrak?: PiutangAsuransiAbstrak;
  biayaAkuisisiTangguhan?: number;
  depositoPadaLembagaKliringDanPenjaminan?: number;
  efekEfekYangDiperdagangkanAbstrak: EfekEfekYangDiperdagangkanAbstrak;
  investasiPemegangPolisPadaKontrakUnitLinked?: number;
  efekYangDibeliDenganJanjiDijualKembali: number;
  weselEksporDanTagihanLainnyaAbstrak: WeselEksporDanTagihanLainnyaAbstrak;
  tagihanAkseptasiAbstrak: TagihanAkseptasiAbstrak;
  tagihanDerivatifAbstrak: TagihanDerivatifAbstrak;
  pinjamanYangDiberikanAbstrak: PinjamanYangDiberikanAbstrak;
  piutangDariLembagaKliringDanPenjaminan?: number;
  piutangNasabahAbstrak: PiutangNasabahAbstrak;
  piutangMurabahahAbstrak?: PiutangMurabahahAbstrak;
  piutangIstishnaAbstrak?: PiutangIstishnaAbstrak;
  piutangIjarahAbstrak?: PiutangIjarahAbstrak;
  piutangPembiayaanKonsumenAbstrak: PiutangPembiayaanKonsumenAbstrak;
  pinjamanQardhAbstrak?: PinjamanQardhAbstrak;
  pembiayaanMudharabahAbstrak?: PembiayaanMudharabahAbstrak;
  pembiayaanMusyarakahAbstrak?: PembiayaanMusyarakahAbstrak;
  investasiSewaAbstrak: InvestasiSewaAbstrak;
  tagihanAnjakPiutangAbstrak?: TagihanAnjakPiutangAbstrak;
  piutangLainnyaAbstrak?: PiutangLainnyaAbstrak;
  asetKeuanganLainnya: number;
  obligasiPemerintah: number;
  asetTidakLancarAtauKelompokLepasanDiklasifikasikanSebagaiDimilikiUntukDijual?: number;
  asetTidakLancarAtauKelompokLepasanDiklasifikasikanSebagaiDimilikiUntukDidistribusikanKepadaPemilik?: number;
  uangMuka?: number;
  biayaDibayarDimuka: number;
  jaminan?: number;
  pajakDibayarDimuka: number;
  klaimAtasPengembalianPajak?: number;
  asetPajakTangguhan: number;
  investasiYangDicatatDenganMenggunakanMetodeEkuitas?: number;
  investasiPadaVenturaBersamaDanEntitasAsosiasiAbstrak?: InvestasiPadaVenturaBersamaDanEntitasAsosiasiAbstrak;
  asetReasuransi?: number;
  asetImbalanPascaKerja?: number;
  goodwill: number;
  asetTakberwujudSelainGoodwill: number;
  propertiInvestasi?: number;
  asetIjarah?: number;
  asetTetap: number;
  asetHakGuna?: number;
  agunanYangDiambilAlih?: number;
  asetPengampunanPajak?: number;
  asetLainnya: number;
  aset: number;
}

interface GiroPadaBankLainAbstrak {
  giroPadaBankLainPihakKetiga: number;
  Total: number;
  giroPadaBankLainPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaGiroPadaBankLain: number;
}

interface PenempatanPadaBankIndonesiaDanBankLainAbstrak {
  penempatanPadaBankIndonesiaDanBankLainPihakKetiga: number;
  Total: number;
  penempatanPadaBankIndonesiaDanBankLainPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaPenempatanPadaBankLain: number;
}

interface PiutangAsuransiAbstrak {
  piutangAsuransiPihakKetiga: number;
  Total: number;
  piutangAsuransiPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPiutangAsuransi: number;
}

interface EfekEfekYangDiperdagangkanAbstrak {
  efekEfekYangDiperdagangkanPihakKetiga: number;
  Total: number;
  efekEfekYangDiperdagangkanPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaEfekEfekYangDiperdagangkan?: number;
}

interface WeselEksporDanTagihanLainnyaAbstrak {
  weselEksporDanTagihanLainnyaPihakKetiga: number;
  Total: number;
  weselEksporDanTagihanLainnyaPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaWeselEksporDanTagihanLainnya: number;
}

interface TagihanAkseptasiAbstrak {
  tagihanAkseptasiPihakKetiga: number;
  Total: number;
  tagihanAkseptasiPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaTagihanAkseptasi: number;
}

interface TagihanDerivatifAbstrak {
  tagihanDerivatifPihakKetiga: number;
  Total: number;
  tagihanDerivatifPihakBerelasi?: number;
}

interface PinjamanYangDiberikanAbstrak {
  pinjamanYangDiberikanPihakKetiga: number;
  Total: number;
  pinjamanYangDiberikanPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPinjamanYangDiberikan: number;
}

interface PiutangNasabahAbstrak {
  piutangNasabahPihakKetiga: number;
  Total: number;
  piutangNasabahPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaPiutangNasabah: number;
}

interface PiutangMurabahahAbstrak {
  piutangMurabahahPihakKetiga: number;
  Total: number;
  piutangMurabahahPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPiutangMurabahah: number;
}

interface PiutangIstishnaAbstrak {
  piutangIstishnaPihakKetiga: number;
  Total: number;
  piutangIstishnaPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPiutangIstishna: number;
}

interface PiutangIjarahAbstrak {
  piutangIjarahPihakKetiga: number;
  Total: number;
  piutangIjarahPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPiutangIjarah: number;
}

interface PiutangPembiayaanKonsumenAbstrak {
  piutangPembiayaanKonsumenPihakKetiga: number;
  Total: number;
  piutangPembiayaanKonsumenPihakBerelasi?: number;
  cadanganKerugianPenurunanNilaiPadaPiutangPembiayaanKonsumen: number;
}

interface PinjamanQardhAbstrak {
  pinjamanQardhPihakKetiga: number;
  Total: number;
  pinjamanQardhPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPinjamanQardh: number;
}

interface PembiayaanMudharabahAbstrak {
  pembiayaanMudharabahPihakKetiga: number;
  Total: number;
  pembiayaanMudharabahPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPembiayaanMudharabah: number;
}

interface PembiayaanMusyarakahAbstrak {
  pembiayaanMusyarakahPihakKetiga: number;
  Total: number;
  pembiayaanMusyarakahPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPembiayaanMusyarakah: number;
}

interface InvestasiSewaAbstrak {
  investasiSewaPihakKetiga: number;
  Total: number;
  investasiSewaPihakBerelasi?: number;
  investasiSewaNilaiResiduYangTerjamin?: number;
  investasiSewaPendapatanPembiayaanTangguhan?: number;
  investasiSewaSimpananJaminan?: number;
  cadanganKerugianPenurunanNilaiPadaInvestasiSewa: number;
}

interface TagihanAnjakPiutangAbstrak {
  tagihanAnjakPiutangPihakKetiga: number;
  Total: number;
  tagihanAnjakPiutangPihakBerelasi: number;
  tagihanAnjakPiutangPadaPendapatanAnjakPiutangTangguhan: number;
  cadanganKerugianPenurunanNilaiPadaTagihanAnjakPiutang: number;
}

interface PiutangLainnyaAbstrak {
  piutangLainnyaPihakKetiga: number;
  Total: number;
  piutangLainnyaPihakBerelasi: number;
  cadanganKerugianPenurunanNilaiPadaPiutangLainnya: number;
}

interface InvestasiPadaVenturaBersamaDanEntitasAsosiasiAbstrak {
  investasiPadaEntitasVenturaBersama: number;
  Total: number;
  investasiPadaEntitasAsosiasi: number;
}

interface LiabilitasDanaSyirkahTemporerDanEkuitasAbstrak {
  liabilitasAbstrak: LiabilitasAbstrak;
  Total: number;
  danaSyirkahTemporerAbstrak: DanaSyirkahTemporerAbstrak;
  akumulasiDanaTabarru?: number;
  ekuitasAbstrak: EkuitasAbstrak;
  liabilitasDanaSyirkahTemporerDanEkuitas: number;
}

interface LiabilitasAbstrak {
  liabilitasSegera?: number;
  Total: number;
  bagiHasilYangBelumDibagikan?: number;
  danaSimpananSyariah: number;
  simpananNasabahAbstrak: SimpananNasabahAbstrak;
  simpananDariBankLainAbstrak?: SimpananDariBankLainAbstrak;
  efekYangDijualDenganJanjiUntukDibeliKembali: number;
  liabilitasDerivatifAbstrak: LiabilitasDerivatifAbstrak;
  utangAsuransi?: number;
  utangKoasuransi?: number;
  liabilitasKepadaPemegangPolisUnitLinked?: number;
  utangBunga?: number;
  liabilitasAkseptasiAbstrak?: LiabilitasAkseptasiAbstrak;
  utangUsaha?: number;
  uangMukaDanAngsuran?: number;
  utangDividen?: number;
  utangDealer?: number;
  pinjamanYangDiterimaAbstrak: PinjamanYangDiterimaAbstrak;
  efekYangDiterbitkanAbstrak: EfekYangDiterbitkanAbstrak;
  liabilitasKontrakAsuransi?: number;
  utangPerusahaanEfek?: number;
  provisi?: number;
  liabilitasAtasKontrak?: number;
  pendapatanDitangguhkan?: number;
  liabilitasSewaPembiayaan?: number;
  estimasiKerugianKomitmenDanKontinjensi: number;
  bebanAkrual?: number;
  utangPajak: number;
  liabilitasPajakTangguhan: number;
  liabilitasPengampunanPajak?: number;
  liabilitasLainnya: number;
  kewajibanImbalanPascaKerja: number;
  pinjamanSubordinasiAbstrak?: PinjamanSubordinasiAbstrak;
  liabilitas: number;
  simpananDariBankLainPihakKetiga?: number;
  liabilitasAkseptasiPihakKetiga?: number;
}

interface SimpananNasabahAbstrak {
  giroAbstrak: GiroAbstrak;
  Total: number;
  giroWadiahAbstrak?: GiroWadiahAbstrak;
  tabunganAbstrak: TabunganAbstrak;
  tabunganWadiahAbstrak?: TabunganWadiahAbstrak;
  depositoBerjangkaAbstrak: DepositoBerjangkaAbstrak;
  depositoWakalahAbstrak?: DepositoWakalahAbstrak;
}

interface GiroAbstrak {
  giroPihakKetiga: number;
  Total: number;
  giroPihakBerelasi: number;
}

interface GiroWadiahAbstrak {
  giroWadiahPihakKetiga: number;
  Total: number;
  giroWadiahPihakBerelasi: number;
}

interface TabunganAbstrak {
  tabunganPihakKetiga: number;
  Total: number;
  tabunganPihakBerelasi: number;
}

interface TabunganWadiahAbstrak {
  tabunganWadiahPihakKetiga: number;
  Total: number;
  tabunganWadiahPihakBerelasi: number;
}

interface DepositoBerjangkaAbstrak {
  depositoBerjangkaPihakKetiga: number;
  Total: number;
  depositoBerjangkaPihakBerelasi: number;
}

interface DepositoWakalahAbstrak {
  depositoWakalahPihakKetiga: number;
  Total: number;
  depositoWakalahPihakBerelasi: number;
}

interface SimpananDariBankLainAbstrak {
  simpananDariBankLainPihakBerelasi?: number;
  Total: number;
  simpananDariBankLainPihakKetiga: number;
}

interface LiabilitasDerivatifAbstrak {
  liabilitasDerivatifPihakKetiga: number;
  Total: number;
  liabilitasDerivatifPihakBerelasi?: number;
}

interface LiabilitasAkseptasiAbstrak {
  liabilitasAkseptasiPihakBerelasi: number;
  Total: number;
  liabilitasAkseptasiPihakKetiga: number;
}

interface PinjamanYangDiterimaAbstrak {
  pinjamanYangDiterimaPihakKetiga: number;
  Total: number;
  pinjamanYangDiterimaPihakBerelasi?: number;
  pinjamanYangDiterimaUtangPadaLembagaKliringDanPenjaminan?: number;
}

interface EfekYangDiterbitkanAbstrak {
  obligasiSubordinasi?: number;
  Total: number;
  suratUtangJangkaMenengah: number;
  efekYangDiterbitkanLainnya: number;
  obligasi?: number;
}

interface PinjamanSubordinasiAbstrak {
  pinjamanSubordinasiPihakKetiga: number;
  Total: number;
  pinjamanSubordinasiPihakBerelasi: number;
}

interface DanaSyirkahTemporerAbstrak {
  bukanBankAbstrak: BukanBankAbstrak;
  Total: number;
  bankAbstrak?: BankAbstrak;
  efekYangDiterbitkanBankAbstrak?: EfekYangDiterbitkanBankAbstrak;
  danaSyirkahTemporer: number;
}

interface BukanBankAbstrak {
  giroMudharabahAbstrak?: GiroMudharabahAbstrak;
  Total: number;
  tabunganMudharabahAbstrak: TabunganMudharabahAbstrak;
  depositoBerjangkaMudharabahAbstrak: DepositoBerjangkaMudharabahAbstrak;
}

interface GiroMudharabahAbstrak {
  giroMudharabahPihakKetiga: number;
  Total: number;
  giroBerjangkaMudharabahPihakBerelasi: number;
}

interface TabunganMudharabahAbstrak {
  tabunganMudharabahPihakKetiga: number;
  Total: number;
  tabunganMudharabahPihakBerelasi?: number;
}

interface DepositoBerjangkaMudharabahAbstrak {
  depositoBerjangkaMudharabahPihakKetiga: number;
  Total: number;
  depositoBerjangkaMudharabahPihakBerelasi?: number;
}

interface BankAbstrak {
  giroMudharabah: number;
  Total: number;
  tabunganMudharabahUmmat: number;
  depositoBerjangkaMudharabah: number;
}

interface EfekYangDiterbitkanBankAbstrak {
  investasiMudharabahAntarBank: number;
  Total: number;
  sukukMudharabah?: number;
  sukukMudharabahSubordinasi?: number;
}

interface EkuitasAbstrak {
  ekuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak: EkuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak;
  Total: number;
  proformaEkuitas?: number;
  kepentinganNonPengendali: number;
  ekuitas: number;
}

interface EkuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak {
  sahamBiasa: number;
  Total: number;
  sahamPreferen?: number;
  tambahanModalDisetor: number;
  sahamTreasuri?: number;
  uangMukaSetoranModal?: number;
  opsiSaham?: number;
  penjabaranLaporanKeuanganAsetTetap?: number;
  cadanganRevaluasi: number;
  cadanganSelisihKursPenjabaran: number;
  cadanganPerubahanNilaiWajarAsetKeuanganNilaiWajarMelaluiPendapatanKomprehensifLainnya: number;
  cadanganKeuntunganKerugianInvestasiPadaInstrumenEkuitas?: number;
  cadanganPembayaranBerbasisSaham?: number;
  cadanganLindungNilaiArusKas?: number;
  cadanganPengukuranKembaliProgramImbalanPasti?: number;
  cadanganLainnya?: number;
  selisihTransaksiPerubahanEkuitasEntitasAnakAsosiasi?: number;
  komponenEkuitasLainnya: number;
  saldoLabaAkumulasiKerugianAbstrak: SaldoLabaAkumulasiKerugianAbstrak;
  ekuitasYangDiatribusikanKepadaPemilikEntitasInduk: number;
}

interface SaldoLabaAkumulasiKerugianAbstrak {
  saldoLabaYangTelahDitentukanPenggunaanyaAbstrak: SaldoLabaYangTelahDitentukanPenggunaanyaAbstrak;
  Total: number;
  saldoLabaYangBelumDitentukanPenggunaannya: number;
}

interface SaldoLabaYangTelahDitentukanPenggunaanyaAbstrak {
  cadanganUmumDanWajib: number;
  Total: number;
  cadanganKhusus?: number;
}

export const getBalanceSheet = async (code: string) => {
  const url = new URL(
    "https://asia-southeast2-ticmidatadev.cloudfunctions.net/cpFSgetBalanceSheetByEmitenCode",
  );
  url.searchParams.set("secCode", code);
  url.searchParams.set("granularity", "annually");
  try {
    return await fetchTicmi<TicmiResponsneData<TBalanceSheet[]>>(
      url.toString(),
    );
  } catch (error) {
    throw error;
  }
};
