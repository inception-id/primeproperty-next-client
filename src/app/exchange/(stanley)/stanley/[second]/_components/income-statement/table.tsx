"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { TicmiIncomeStatement } from "@/app/exchange/(stanley)/_server/getTicmiIncomeStatement";

type TableProps = {
  data: TicmiIncomeStatement[];
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
      <div>Income Statement ({lastUpdate})</div>
      <DataTable table={table} />
    </>
  );
};

export default Table;
