import { ColumnDef } from "@tanstack/react-table";
import { TBalanceSheet } from "../../_server/getBalanceSheet";
import { formatToPerShare } from "../../_utils/formatToIndonesianCurrency";

export const getColumns = (
  listedShares: number,
): ColumnDef<TBalanceSheet>[] => {
  return [
    {
      header: "PERIOD",
      accessorKey: "period",
    },
    {
      header: "CASH",
      accessorKey: "cash",
      cell: ({ row }) => {
        const cash = row.original.asetAbstrak.kas;
        return formatToPerShare(cash, listedShares);
      },
    },
    {
      header: "ACCOUNTS",
      accessorKey: "giro",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.giroPadaBankIndonesia;
        const b = row.original.asetAbstrak.giroPadaBankLainAbstrak.Total;
        return formatToPerShare(a + b, listedShares);
      },
    },
    {
      header: "PLACEMENTS",
      accessorKey: "penempatan",
      cell: ({ row }) => {
        const a =
          row.original.asetAbstrak.penempatanPadaBankIndonesiaDanBankLainAbstrak
            .Total;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "RECEIVABLES",
      accessorKey: "piutang",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.piutangAsuransiAbstrak
          ? row.original.asetAbstrak.piutangAsuransiAbstrak.Total
          : 0;
        const b = row.original.asetAbstrak.weselEksporDanTagihanLainnyaAbstrak
          ? row.original.asetAbstrak.weselEksporDanTagihanLainnyaAbstrak.Total
          : 0;
        const c = row.original.asetAbstrak.tagihanAkseptasiAbstrak.Total;
        const d = row.original.asetAbstrak.tagihanDerivatifAbstrak.Total;
        const e =
          row.original.asetAbstrak.piutangDariLembagaKliringDanPenjaminan ?? 0;
        const f = row.original.asetAbstrak.piutangNasabahAbstrak
          ? row.original.asetAbstrak.piutangNasabahAbstrak.Total
          : 0;
        const g = row.original.asetAbstrak.piutangMurabahahAbstrak
          ? row.original.asetAbstrak.piutangMurabahahAbstrak.Total
          : 0;
        const h = row.original.asetAbstrak.piutangIstishnaAbstrak
          ? row.original.asetAbstrak.piutangIstishnaAbstrak.Total
          : 0;
        const i = row.original.asetAbstrak.piutangIjarahAbstrak
          ? row.original.asetAbstrak.piutangIjarahAbstrak.Total
          : 0;
        const j = row.original.asetAbstrak.piutangPembiayaanKonsumenAbstrak
          ? row.original.asetAbstrak.piutangPembiayaanKonsumenAbstrak.Total
          : 0;
        const k = row.original.asetAbstrak.tagihanAnjakPiutangAbstrak
          ? row.original.asetAbstrak.tagihanAnjakPiutangAbstrak.Total
          : 0;
        const l = row.original.asetAbstrak.piutangLainnyaAbstrak
          ? row.original.asetAbstrak.piutangLainnyaAbstrak.Total
          : 0;

        const total = a + b + c + d + e + f + g + h + i + j + k + l;
        return formatToPerShare(total, listedShares);
      },
    },
    {
      header: "SECURITIES & BONDS",
      accessorKey: "marketable",
      cell: ({ row }) => {
        const a =
          row.original.asetAbstrak.efekEfekYangDiperdagangkanAbstrak.Total;
        const b =
          row.original.asetAbstrak.efekYangDibeliDenganJanjiDijualKembali;
        const c = row.original.asetAbstrak.obligasiPemerintah ?? 0;
        const total = a + b + c;
        return formatToPerShare(total, listedShares);
      },
    },
    {
      header: "LOANS",
      accessorKey: "loans",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total;
        const b = row.original.asetAbstrak.pinjamanQardhAbstrak
          ? row.original.asetAbstrak.pinjamanQardhAbstrak.Total
          : 0;
        return formatToPerShare(a + b, listedShares);
      },
    },
    {
      header: "FIXED ASSETS",
      accessorKey: "fixedAssets",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.asetTetap;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "ASSETS",
      accessorKey: "assets",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.kas;
        const b = row.original.asetAbstrak.giroPadaBankIndonesia;
        const c = row.original.asetAbstrak.giroPadaBankLainAbstrak.Total;
        const d =
          row.original.asetAbstrak.penempatanPadaBankIndonesiaDanBankLainAbstrak
            .Total;

        const e = row.original.asetAbstrak.piutangAsuransiAbstrak
          ? row.original.asetAbstrak.piutangAsuransiAbstrak.Total
          : 0;
        const f = row.original.asetAbstrak.weselEksporDanTagihanLainnyaAbstrak
          ? row.original.asetAbstrak.weselEksporDanTagihanLainnyaAbstrak.Total
          : 0;
        const g = row.original.asetAbstrak.tagihanAkseptasiAbstrak.Total;
        const h = row.original.asetAbstrak.tagihanDerivatifAbstrak.Total;
        const i =
          row.original.asetAbstrak.piutangDariLembagaKliringDanPenjaminan ?? 0;
        const j = row.original.asetAbstrak.piutangNasabahAbstrak
          ? row.original.asetAbstrak.piutangNasabahAbstrak.Total
          : 0;
        const k = row.original.asetAbstrak.piutangMurabahahAbstrak
          ? row.original.asetAbstrak.piutangMurabahahAbstrak.Total
          : 0;
        const l = row.original.asetAbstrak.piutangIstishnaAbstrak
          ? row.original.asetAbstrak.piutangIstishnaAbstrak.Total
          : 0;
        const m = row.original.asetAbstrak.piutangIjarahAbstrak
          ? row.original.asetAbstrak.piutangIjarahAbstrak.Total
          : 0;
        const n = row.original.asetAbstrak.piutangPembiayaanKonsumenAbstrak
          ? row.original.asetAbstrak.piutangPembiayaanKonsumenAbstrak.Total
          : 0;
        const o = row.original.asetAbstrak.tagihanAnjakPiutangAbstrak
          ? row.original.asetAbstrak.tagihanAnjakPiutangAbstrak.Total
          : 0;
        const p = row.original.asetAbstrak.piutangLainnyaAbstrak
          ? row.original.asetAbstrak.piutangLainnyaAbstrak.Total
          : 0;

        const q =
          row.original.asetAbstrak.efekEfekYangDiperdagangkanAbstrak.Total;
        const r =
          row.original.asetAbstrak.efekYangDibeliDenganJanjiDijualKembali;
        const s = row.original.asetAbstrak.obligasiPemerintah ?? 0;

        const t = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total;
        const u = row.original.asetAbstrak.pinjamanQardhAbstrak
          ? row.original.asetAbstrak.pinjamanQardhAbstrak.Total
          : 0;

        const v = row.original.asetAbstrak.asetTetap;
        const total =
          a +
          b +
          c +
          d +
          e +
          f +
          g +
          h +
          i +
          j +
          k +
          l +
          m +
          n +
          o +
          p +
          q +
          r +
          s +
          t +
          u +
          v;
        return formatToPerShare(total, listedShares);
      },
    },
    {
      header: "LIABILITIES",
      accessorKey: "liabilities",
      cell: ({ row }) => {
        const a =
          row.original.liabilitasDanaSyirkahTemporerDanEkuitasAbstrak
            .liabilitasAbstrak.Total;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "EQUITY",
      accessorKey: "equity",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.kas;
        const b = row.original.asetAbstrak.giroPadaBankIndonesia;
        const c = row.original.asetAbstrak.giroPadaBankLainAbstrak.Total;
        const d =
          row.original.asetAbstrak.penempatanPadaBankIndonesiaDanBankLainAbstrak
            .Total;

        const e = row.original.asetAbstrak.piutangAsuransiAbstrak
          ? row.original.asetAbstrak.piutangAsuransiAbstrak.Total
          : 0;
        const f = row.original.asetAbstrak.weselEksporDanTagihanLainnyaAbstrak
          ? row.original.asetAbstrak.weselEksporDanTagihanLainnyaAbstrak.Total
          : 0;
        const g = row.original.asetAbstrak.tagihanAkseptasiAbstrak.Total;
        const h = row.original.asetAbstrak.tagihanDerivatifAbstrak.Total;
        const i =
          row.original.asetAbstrak.piutangDariLembagaKliringDanPenjaminan ?? 0;
        const j = row.original.asetAbstrak.piutangNasabahAbstrak
          ? row.original.asetAbstrak.piutangNasabahAbstrak.Total
          : 0;
        const k = row.original.asetAbstrak.piutangMurabahahAbstrak
          ? row.original.asetAbstrak.piutangMurabahahAbstrak.Total
          : 0;
        const l = row.original.asetAbstrak.piutangIstishnaAbstrak
          ? row.original.asetAbstrak.piutangIstishnaAbstrak.Total
          : 0;
        const m = row.original.asetAbstrak.piutangIjarahAbstrak
          ? row.original.asetAbstrak.piutangIjarahAbstrak.Total
          : 0;
        const n = row.original.asetAbstrak.piutangPembiayaanKonsumenAbstrak
          ? row.original.asetAbstrak.piutangPembiayaanKonsumenAbstrak.Total
          : 0;
        const o = row.original.asetAbstrak.tagihanAnjakPiutangAbstrak
          ? row.original.asetAbstrak.tagihanAnjakPiutangAbstrak.Total
          : 0;
        const p = row.original.asetAbstrak.piutangLainnyaAbstrak
          ? row.original.asetAbstrak.piutangLainnyaAbstrak.Total
          : 0;

        const q =
          row.original.asetAbstrak.efekEfekYangDiperdagangkanAbstrak.Total;
        const r =
          row.original.asetAbstrak.efekYangDibeliDenganJanjiDijualKembali;
        const s = row.original.asetAbstrak.obligasiPemerintah ?? 0;

        const t = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total;
        const u = row.original.asetAbstrak.pinjamanQardhAbstrak
          ? row.original.asetAbstrak.pinjamanQardhAbstrak.Total
          : 0;

        const v = row.original.asetAbstrak.asetTetap;
        const total =
          a +
          b +
          c +
          d +
          e +
          f +
          g +
          h +
          i +
          j +
          k +
          l +
          m +
          n +
          o +
          p +
          q +
          r +
          s +
          t +
          u +
          v;
        const w =
          row.original.liabilitasDanaSyirkahTemporerDanEkuitasAbstrak
            .liabilitasAbstrak.Total;
        return formatToPerShare(total - w, listedShares);
      },
    },
    {
      header: "RETAINED EARN.",
      accessorKey: "retainedEarning",
      cell: ({ row }) => {
        const a =
          row.original.liabilitasDanaSyirkahTemporerDanEkuitasAbstrak
            .ekuitasAbstrak
            .ekuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak
            .saldoLabaAkumulasiKerugianAbstrak.Total;
        return formatToPerShare(a, listedShares);
      },
    },
  ];
};
