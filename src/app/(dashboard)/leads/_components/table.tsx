"use client";
import { DataTable } from "@/components/ui/data-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { tableColumns } from "./table-columns";

export const Table = () => {
  const table = useReactTable({
    data: [],
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <DataTable table={table} />;
};
