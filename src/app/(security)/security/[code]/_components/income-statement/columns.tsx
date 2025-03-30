import { ColumnDef } from "@tanstack/react-table";
import { TIncomeStatement } from "../../_server/getIncomeStatement";
import { formatToPerShare } from "../../_utils/formatToIndonesianCurrency";
import { Tooltip } from "react-tooltip";
import { LuInfo } from "react-icons/lu";

export const getColumns = (
  listedShare: number,
): ColumnDef<TIncomeStatement>[] => {
  return [
    {
      header: "PERIOD",
      accessorKey: "period",
    },
    {
      header: "INTEREST PROFIT",
      accessorKey: "interestProfit",
      cell: ({ row }) => {
        const a = row.original.pendapatanDanBebanOperasionalAbstrak.Total;
        return formatToPerShare(a, listedShare);
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
        return formatToPerShare(a, listedShare);
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
        return formatToPerShare(a, listedShare);
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
        return formatToPerShare(a, listedShare);
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
        return `${total.toFixed(1)}%`;
      },
    },
    {
      header: "NET PROFIT",
      accessorKey: "netProfit",
      cell: ({ row }) => {
        const a = row.original.labaRugiKomprehensif;
        return formatToPerShare(a, listedShare);
      },
    },
    {
      header: "NET PROFIT MARGIN",
      accessorKey: "netProfitMargin",
      cell: ({ row }) => {
        const a = row.original.labaRugiKomprehensif;
        const b =
          row.original.pendapatanDanBebanOperasionalAbstrak.pendapatanBunga;
        const total = (a / b) * 100;
        return `${total.toFixed(1)}%`;
      },
    },
  ];
};
