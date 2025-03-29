"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./columns";
import { TIdxScreen } from "../../../_server/screenIdx";
import { DataTable } from "@/components/ui/data-table";

type ScreenTableProps = {
  data: TIdxScreen[];
};

export const ScreenTable = ({ data }: ScreenTableProps) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <DataTable table={table} />
    </>
  );
};
