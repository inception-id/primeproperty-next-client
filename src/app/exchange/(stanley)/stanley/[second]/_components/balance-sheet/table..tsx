"use client";
import { TicmiAnnualBalanceSheet } from "@/app/exchange/(stanley)/_server/getTicmiAnnualBalanceSheet";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

type TableProps = {
  data: TicmiAnnualBalanceSheet[];
  lastUpdate: string;
  shareOutstanding: number;
};

export const Table = ({ data, lastUpdate, shareOutstanding }: TableProps) => {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    columns: columns(shareOutstanding),
    data,
  });
  return (
    <>
      <div>Balance Sheet per Rupiah Share ({lastUpdate})</div>
      <DataTable table={table} />
    </>
  );
};

export default Table;
