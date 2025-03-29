"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { TicmiCashFlow } from "@/app/exchange/(stanley)/_server/getTicmiAnnualCashflow";

type TableProps = {
  data: TicmiCashFlow[];
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
      <div>Cash Flow ({lastUpdate})</div>
      <DataTable table={table} />
    </>
  );
};

export default Table;
