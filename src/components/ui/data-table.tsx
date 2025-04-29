"use client";

import { flexRender } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Table as TanstackTable } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { memo } from "react";
import Image from "next/image";

type TDataTableProps<T> = {
  isLoading?: boolean;
  table: TanstackTable<T>;
  tableCellClassName?: string;
};

function DataTableComponent<T>({
  isLoading,
  table,
  tableCellClassName,
}: TDataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Image
          src="/images/primepro.png"
          alt="Primepro"
          width={100}
          height={100}
          className="animate-bounce"
        />
      </div>
    );
  }
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className={cn(tableCellClassName)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={table.getAllColumns().length}>
              No Data
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const DataTable = <T,>(props: TDataTableProps<T>) => (
  <MemoizedDataTable {...props} />
);

const MemoizedDataTable = memo(DataTableComponent) as typeof DataTableComponent;

export { DataTable };
