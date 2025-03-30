"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TypographyLarge } from "@/components/ui/typography/large";
import { DataTable } from "@/components/ui/data-table";
import { getColumns } from "./columns";
import { TIncomeStatement } from "../../_server/getIncomeStatement";

type TableProps = {
  listedShares: number;
  data: TIncomeStatement[];
};

export const Table = ({ data, listedShares }: TableProps) => {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    columns: getColumns(listedShares),
    data,
  });

  return (
    <>
      <TypographyLarge>Income Statement</TypographyLarge>
      <DataTable table={table} />
    </>
  );
};
