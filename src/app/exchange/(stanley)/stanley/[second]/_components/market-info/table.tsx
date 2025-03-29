"use client";

import { TicmiAnnualMarketInfo } from "@/app/exchange/(stanley)/_server/getTicmiAnnualMarketInfo";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

type TableProps = {
  data: TicmiAnnualMarketInfo[];
};

export const Table = ({ data }: TableProps) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div>Market Info </div>
      <DataTable table={table} />
    </>
  );
};
