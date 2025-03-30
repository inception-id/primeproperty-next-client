import { TicmiAnnualBalanceSheet } from "@/app/exchange/(stanley)/_server/getTicmiAnnualBalanceSheet";
import { ColumnDef } from "@tanstack/react-table";

export const columns = (
  shareOutstanding: number,
): ColumnDef<TicmiAnnualBalanceSheet>[] => {
  return [
    {
      header: "PERIOD",
      accessorKey: "period",
    },
    {
      header: "CASH",
      accessorKey: "Cash",
      cell: ({ row }) => {
        return (
          row.original.asetAbstrak.asetLancarAbstrak.kasDanSetaraKas /
          shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "INVENTORIES",
      accessorKey: "Inventories",
      cell: ({ row }) => {
        return (
          (row.original.asetAbstrak.asetLancarAbstrak?.persediaanLancarAbstrak
            ?.persediaanLancar ?? 0) / shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "RECEIVABLES",
      accessorKey: "receivables",
      cell: ({ row }) => {
        const a =
          row.original.asetAbstrak.asetLancarAbstrak.piutangUsahaAbstrak.Total;
        const b =
          row.original.asetAbstrak.asetLancarAbstrak.piutangLainnyaAbstrak
            ?.Total || 0;
        return ((a + b) / shareOutstanding).toFixed().toLocaleString();
      },
    },
    {
      header: "CURRENT ASSET",
      accessorKey: "currentAsset",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.asetLancarAbstrak.kasDanSetaraKas;
        const b =
          row.original.asetAbstrak.asetLancarAbstrak?.persediaanLancarAbstrak
            ?.Total ?? 0;
        const c =
          row.original.asetAbstrak.asetLancarAbstrak.piutangUsahaAbstrak.Total;
        const d =
          row.original.asetAbstrak.asetLancarAbstrak.piutangLainnyaAbstrak
            ?.Total;
        return ((a + b + c + d) / shareOutstanding).toFixed().toLocaleString();
      },
    },
    {
      header: "FIXED ASSET",
      accessorKey: "fixedAsset",
      cell: ({ row }) => {
        return (
          row.original.asetAbstrak.asetTidakLancarAbstrak.asetTetap /
          shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "TOTAL ASSET",
      accessorKey: "totalAsset",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.asetLancarAbstrak.kasDanSetaraKas;
        const b =
          row.original.asetAbstrak.asetLancarAbstrak?.persediaanLancarAbstrak
            ?.Total;
        const c =
          row.original.asetAbstrak.asetLancarAbstrak.piutangUsahaAbstrak.Total;
        const d =
          row.original.asetAbstrak.asetLancarAbstrak.piutangLainnyaAbstrak
            ?.Total || 0;
        const e = row.original.asetAbstrak.asetTidakLancarAbstrak.asetTetap;
        return ((a + b + c + d + e) / shareOutstanding)
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "S.T. LIABILITES",
      accessorKey: "shortTermLiabilities",
      cell: ({ row }) => {
        return (
          row.original.liabilitasDanEkuitasAbstrak.liabilitasAbstrak
            .liabilitasJangkaPendekAbstrak.Total / shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "L.T. LIABILITES",
      accessorKey: "longTermLiabilities",
      cell: ({ row }) => {
        return (
          row.original.liabilitasDanEkuitasAbstrak.liabilitasAbstrak
            .liabilitasJangkaPanjangAbstrak.Total / shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "TOTAL LIABILITES",
      accessorKey: "totalLiabilities",
      cell: ({ row }) => {
        return (
          row.original.liabilitasDanEkuitasAbstrak.liabilitasAbstrak.Total /
          shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "CURRENT EQUITY",
      accessorKey: "currentEquity",
      cell: ({ row }) => {
        return (
          row.original.liabilitasDanEkuitasAbstrak.liabilitasAbstrak.Total /
          shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "TOTAL EQUITY",
      accessorKey: "totalEquity",
      cell: ({ row }) => {
        const a = row.original.asetAbstrak.asetLancarAbstrak.kasDanSetaraKas;
        const b =
          row.original.asetAbstrak.asetLancarAbstrak?.persediaanLancarAbstrak
            ?.Total;
        const c =
          row.original.asetAbstrak.asetLancarAbstrak.piutangUsahaAbstrak.Total;
        const d =
          row.original.asetAbstrak.asetLancarAbstrak.piutangLainnyaAbstrak
            ?.Total;
        const e = row.original.asetAbstrak.asetTidakLancarAbstrak.asetTetap;
        const f =
          row.original.liabilitasDanEkuitasAbstrak.liabilitasAbstrak.Total;
        return ((a + b + c + d + e - f) / shareOutstanding)
          .toFixed()
          .toLocaleString();
      },
    },

    {
      header: "RETAINED EARNINGS",
      accessorKey: "retainedEarnings",
      cell: ({ row }) => {
        return (
          row.original.liabilitasDanEkuitasAbstrak.ekuitasAbstrak
            .ekuitasYangDiatribusikanKepadaPemilikEntitasIndukAbstrak
            .saldoLabaAkumulasiKerugianAbstrak.Total / shareOutstanding
        )
          .toFixed()
          .toLocaleString();
      },
    },
  ];
};
