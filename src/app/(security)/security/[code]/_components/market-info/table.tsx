"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TMarketInfo } from "../../_server";
import { columns } from "./columns";
import { TypographyLarge } from "@/components/ui/typography/large";
import { DataTable } from "@/components/ui/data-table";

type TableProps = {
  data: TMarketInfo[];
};

export const Table = ({ data }: TableProps) => {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    columns: columns,
    data,
  });

  return (
    <>
      <TypographyLarge>Market Info</TypographyLarge>
      <DataTable table={table} />
    </>
  );
};
