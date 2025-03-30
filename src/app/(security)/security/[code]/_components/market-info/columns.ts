import { ColumnDef } from "@tanstack/react-table";
import { TMarketInfo } from "../../_server";

export const columns: ColumnDef<TMarketInfo>[] = [
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
];
