import { TicmiIncomeStatement } from "@/app/exchange/(stanley)/_server/getTicmiIncomeStatement";
import { ColumnDef } from "@tanstack/react-table";

export const columns = (
  outstandingShares: number,
): ColumnDef<TicmiIncomeStatement>[] => {
  return [
    {
      header: "PERIOD",
      accessorKey: "period",
    },
    {
      header: "REVENUE",
      accessorKey: "revenue",
      cell: ({ row }) => {
        return (row.original.penjualanDanPendapatanUsaha / outstandingShares)
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "GROSS PROFIT MARGIN",
      accessorKey: "grossProfitMargin",
      cell: ({ row }) => {
        return (
          row.original.labaBruto / row.original.penjualanDanPendapatanUsaha
        )
          .toFixed(2)
          .toLocaleString();
      },
    },
    {
      header: "GROSS PROFIT",
      accessorKey: "grossProfit",
      cell: ({ row }) => {
        return (row.original.labaBruto / outstandingShares)
          .toFixed()
          .toLocaleString();
      },
    },
    {
      header: "OPERATING PROFIT MARGIN",
      accessorKey: "operatingProfitMargin",
      cell: ({ row }) => {
        const a = row.original.labaBruto;
        const b = row.original.bebanPenjualan;
        const c = row.original.bebanUmumDanAdministrasi;
        return ((a + b + c) / row.original.penjualanDanPendapatanUsaha)
          .toFixed(2)
          .toLocaleString();
      },
    },
    {
      header: "OPERATING PROFIT",
      accessorKey: "operatingProfit",
      cell: ({ row }) => {
        const a = row.original.labaBruto;
        const b = row.original.bebanPenjualan;
        const c = row.original.bebanUmumDanAdministrasi;
        return ((a - b - c) / outstandingShares).toFixed().toLocaleString();
      },
    },
    {
      header: "NET PROFIT MARGIN",
      accessorKey: "netProfitMargin",
      cell: ({ row }) => {
        return (
          (row.original.labaRugi -
            Number(row.original.labaRugiDariOperasiYangDihentikan || 0)) /
          row.original.penjualanDanPendapatanUsaha
        )
          .toFixed(2)
          .toLocaleString();
      },
    },
    {
      header: "NET PROFIT",
      accessorKey: "netProfit",
      cell: ({ row }) => {
        return (
          (row.original.labaRugi -
            Number(row.original.labaRugiDariOperasiYangDihentikan || 0)) /
          outstandingShares
        )
          .toFixed()
          .toLocaleString();
      },
    },
  ];
};
