"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { TranslateSharedStorageColumn } from "@/app/(languageai)/languageai/shared/translate/_components/shared-storage-column";
import { TTranslationSharedStorage } from "@/lib/api/translation/find-translation-shared-storage";

type TranslateSharedStorageDataTableProps = {
  data: TTranslationSharedStorage[];
};

const TranslateSharedStorageDataTable = ({
  data,
}: TranslateSharedStorageDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TranslateSharedStorageColumn(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="max-h-[75vh] md:max-h-[80vh] border rounded-lg overflow-y-auto">
        <DataTable table={table} tableCellClassName="align-top" />
      </div>
      <DataTablePagination table={table} />
    </>
  );
};

export default TranslateSharedStorageDataTable;
