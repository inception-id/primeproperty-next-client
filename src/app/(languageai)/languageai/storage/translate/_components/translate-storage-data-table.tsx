"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { TranslateStorageColumn } from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-column";

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
  });
  return (
    <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
      <DataTable table={table} tableCellClassName="align-top" />
    </div>
  );
};

export default TranslateStorageDataTable;
