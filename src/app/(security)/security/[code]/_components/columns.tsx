import { ColumnDef } from "@tanstack/react-table";
import { TFinancialStatement } from "./financial-statement";
import { formatToPerShare } from "../_utils/formatToIndonesianCurrency";
import { LuInfo } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

export const getColumns = (
  listedShares: number,
): ColumnDef<TFinancialStatement>[] => {
  return [
    {
      header: "PERIOD",
      accessorKey: "period",
    },
    {
      header: "CLOSE",
      accessorKey: "close",
      cell: ({ row }) => row.original.close.toLocaleString(),
    },
    {
      header: "SHARES OUTSTANDING",
      accessorKey: "listedShares",
      cell: ({ row }) => row.original.listedShares.toLocaleString(),
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
        const d = row.original.asetAbstrak.tagihanDerivatifAbstrak
          ? row.original.asetAbstrak.tagihanDerivatifAbstrak.Total
          : 0;
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
        const a = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak
          ? row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total
          : 0;
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
        const h = row.original.asetAbstrak.tagihanDerivatifAbstrak
          ? row.original.asetAbstrak.tagihanDerivatifAbstrak.Total
          : 0;
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

        const t = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak
          ? row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total
          : 0;
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
        const h = row.original.asetAbstrak.tagihanDerivatifAbstrak
          ? row.original.asetAbstrak.tagihanDerivatifAbstrak.Total
          : 0;
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

        const t = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak
          ? row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total
          : 0;
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
    {
      header: "INTEREST PROFIT",
      accessorKey: "interestProfit",
      cell: ({ row }) => {
        const a = row.original.pendapatanDanBebanOperasionalAbstrak.Total;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "INTEREST PROFIT MARGIN",
      accessorKey: "interestProfit",
      cell: ({ row }) => {
        const a = row.original.pendapatanDanBebanOperasionalAbstrak.Total;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const total = (a / b) * 100;
        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: "OPERATIONAL PROFIT",
      accessorKey: "operationalProfit",
      cell: ({ row }) => {
        const a = row.original.labaOperasional;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "OPERATIONAL PROFIT MARGIN",
      accessorKey: "operationalProfitMargin",
      cell: ({ row }) => {
        const a = row.original.labaOperasional;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const total = (a / b) * 100;
        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: "OPERATIONAL PROFIT",
      accessorKey: "operationalProfit",
      cell: ({ row }) => {
        const a = row.original.labaOperasional;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "OPERATIONAL PROFIT MARGIN",
      accessorKey: "operationalProfitMargin",
      cell: ({ row }) => {
        const a = row.original.labaOperasional;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const total = (a / b) * 100;
        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: () => {
        return (
          <>
            <div
              className="flex items-center"
              data-tooltip-id="pre-net-profit"
              data-tooltip-content="Profit before tax and other income"
              data-tooltip-place="top"
            >
              PRE. NET PROFIT
              <LuInfo className="text-xl" />
            </div>
            <Tooltip id="pre-net-profit" />
          </>
        );
      },
      accessorKey: "preNetProfit",
      cell: ({ row }) => {
        const a = row.original.labaRugi;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: "PRE. NET PROFIT MARGIN",
      accessorKey: "preNetProfitMargin",
      cell: ({ row }) => {
        const a = row.original.labaRugi;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const total = (a / b) * 100;

        if (total < 15) {
          return <span className="text-red-500">{total.toFixed(1)}%</span>;
        }

        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: "NET PROFIT",
      accessorKey: "netProfit",
      cell: ({ row }) => {
        const a = row.original.labaRugiKomprehensif;
        return formatToPerShare(a, listedShares);
      },
    },
    {
      header: () => {
        return (
          <>
            <div id="npm" className="flex items-center gap-1">
              <span>NPM</span>
              <LuInfo className="text-lg" />
            </div>
            <Tooltip anchorSelect="#npm" place="top">
              <div>NET PROFIT MARGIN</div>
              <div>A good rule of thumb is &gt; 15%</div>
              <div>(not applicable to banking stocks)</div>
            </Tooltip>
          </>
        );
      },
      accessorKey: "netProfitMargin",
      cell: ({ row }) => {
        const a = row.original.labaRugiKomprehensif;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const total = (a / b) * 100;

        if (total < 15) {
          return <span className="text-red-500">{total.toFixed(1)}%</span>;
        }

        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: () => {
        return (
          <>
            <div id="roe" className="flex items-center gap-1">
              <span>ROE</span>
              <LuInfo className="text-lg" />
            </div>
            <Tooltip anchorSelect="#roe">
              <div>Return on Equity</div>
              <div>A good rule of thumb is &gt; 10%</div>
            </Tooltip>
          </>
        );
      },
      accessorKey: "roe",
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
        const h = row.original.asetAbstrak.tagihanDerivatifAbstrak
          ? row.original.asetAbstrak.tagihanDerivatifAbstrak.Total
          : 0;
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

        const t = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak
          ? row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total
          : 0;
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

        const x = row.original.labaRugi;
        const y = (x / (total - w)) * 100;

        if (y < 10) {
          return <span className="text-red-500">{y.toFixed(1)}%</span>;
        }

        return `${y.toFixed(1)}%`;
      },
    },
    {
      header: () => {
        return (
          <>
            <div id="effRatio" className="flex items-center gap-1">
              <span>EFF. RATIO</span>
              <LuInfo className="text-lg" />
            </div>
            <Tooltip anchorSelect="#effRatio">
              <div>Efficiency Ratio</div>
              <div>Non Interest Expense divided by Revenue</div>
              <div>Rule of thumb &lt; 55%</div>
            </Tooltip>
          </>
        );
      },
      accessorKey: "nonInterestExpense",
      cell: ({ row }) => {
        const a =
          row.original.liabilitasDanaSyirkahTemporerDanEkuitasAbstrak
            .liabilitasAbstrak.Total;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const c = row.original.pendapatanDanBebanOperasionalAbstrak.bebanBunga;

        const total = (a + c) / b;
        if (total > 55) {
          return <span className="text-red-500">{total.toFixed(1)}%</span>;
        }
        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: () => {
        return (
          <>
            <div id="roa" className="flex items-center gap-1">
              <span>ROA</span>
              <LuInfo className="text-lg" />
            </div>
            <Tooltip anchorSelect="#roa">
              <div>Return on Assets</div>
              <div>Rule of thumb &gt; 1%</div>
            </Tooltip>
          </>
        );
      },
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
        const h = row.original.asetAbstrak.tagihanDerivatifAbstrak
          ? row.original.asetAbstrak.tagihanDerivatifAbstrak.Total
          : 0;
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

        const t = row.original.asetAbstrak.pinjamanYangDiberikanAbstrak
          ? row.original.asetAbstrak.pinjamanYangDiberikanAbstrak.Total
          : 0;
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
        const x = row.original.labaRugiKomprehensif;

        const y = (x / total) * 100;
        if (y < 1) {
          return <span className="text-red-500">{y.toFixed(1)}%</span>;
        }
        return `${y.toFixed(1)}%`;
      },
    },
  ];
};
