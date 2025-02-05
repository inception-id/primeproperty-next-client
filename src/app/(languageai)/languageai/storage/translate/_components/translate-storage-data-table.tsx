"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { TranslateStorageColumn } from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-column";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TTranslateStorageDataTableProps = {
  data: TTranslationStorage[];
};

const TranslateStorageDataTable = ({
  data,
}: TTranslateStorageDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TranslateStorageColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <div className="h-[75vh] lg:h-[80vh] overflow-y-auto">
        <DataTable table={table} tableCellClassName="align-top" />
      </div>
      <DataTablePagination table={table} />
    </>
  );
};

export default TranslateStorageDataTable;
