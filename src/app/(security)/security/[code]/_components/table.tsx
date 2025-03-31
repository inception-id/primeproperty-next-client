"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TypographyLarge } from "@/components/ui/typography/large";
import { DataTable } from "@/components/ui/data-table";
import { TFinancialStatement } from "./financial-statement";
import { getColumns } from "./columns";

type TableProps = {
  listedShares: number;
  data: TFinancialStatement[];
};

export const Table = ({ data, listedShares }: TableProps) => {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    columns: getColumns(listedShares),
    data,
  });

  return (
    <>
      <TypographyLarge>Financial Statement</TypographyLarge>
      <DataTable table={table} />
    </>
  );
};
