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
import { LuLoader } from "react-icons/lu";

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
          <TableRow>
            <TableCell colSpan={table.getAllColumns().length}>
              <div className="flex items-center gap-2 animate-bounce">
                <LuLoader className="animate-spin" />
                Loading
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
