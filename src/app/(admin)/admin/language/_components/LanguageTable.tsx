"use client";

import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { LanguageTableColumns } from "@/app/(admin)/admin/language/_components/LanguageTableColumns";
import { TLanguage } from "@/lib/api/languages/createLanguage";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { useState } from "react";

type TLanguagesTableProps = {
  data: TLanguage[];
};

const LanguagesTable = ({ data }: TLanguagesTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns: LanguageTableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  });

  return (
    <div className="mt-4">
      <div className="max-h-[80vh] mb-4">
        <DataTable table={table} />
      </div>
        <DataTablePagination table={table} />
    </div>
  );
};

export default LanguagesTable;
