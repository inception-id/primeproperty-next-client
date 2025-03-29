import { ColumnDef } from "@tanstack/react-table";
import { TIdxScreen } from "../../../_server/screenIdx";

export const columns: ColumnDef<TIdxScreen>[] = [
  {
    header: "CODE",
    accessorKey: "stockCode",
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
