import { ColumnDef } from "@tanstack/react-table";
import { TIdxScreen } from "../../../_server/screenIdx";
import Link from "next/link";

export const columns: ColumnDef<TIdxScreen>[] = [
  {
    header: "CODE",
    accessorKey: "stockCode",
    cell: ({ row }) => {
      const { stockCode } = row.original;
      return (
        <Link
          href={`/exchange/stanley/${stockCode}`}
          className="text-blue-500 font-bold"
        >
          {stockCode}
        </Link>
      );
    },
  },
  {
    header: "NAME",
    accessorKey: "companyName",
  },
  {
    header: "DER",
    accessorKey: "der",
  },
  {
    header: "PBV",
    accessorKey: "pbv",
  },
  {
    header: "PER",
    accessorKey: "per",
  },
  {
    header: "ROE",
    accessorKey: "roe",
  },
  {
    header: "NPM",
    accessorKey: "npm",
  },
];
