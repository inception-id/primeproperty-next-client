"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TypographyLarge } from "@/components/ui/typography/large";
import { DataTable } from "@/components/ui/data-table";
import { TBalanceSheet } from "../../_server/getBalanceSheet";
import { getColumns } from "./columns";

type TableProps = {
  listedShares: number;
  data: TBalanceSheet[];
};

export const Table = ({ data, listedShares }: TableProps) => {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    columns: getColumns(listedShares),
    data,
  });

  return (
    <>
      <TypographyLarge>Balance Sheet (per share) </TypographyLarge>
      <DataTable table={table} />
    </>
  );
};
