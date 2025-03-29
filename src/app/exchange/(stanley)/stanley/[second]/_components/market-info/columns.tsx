import { TicmiAnnualMarketInfo } from "@/app/exchange/(stanley)/_server/getTicmiAnnualMarketInfo";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TicmiAnnualMarketInfo>[] = [
  {
    header: "PERIOD",
    accessorKey: "period",
  },
  {
    header: "LISTED SHARES",
    accessorKey: "listedShares",
    cell: ({ row }) => row?.original?.listedShares?.toLocaleString(),
  },
  {
    header: "CLOSE",
    accessorKey: "close",
  },
];
