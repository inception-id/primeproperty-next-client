"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TTranslation } from "@/lib/api/translation/createTranslation";
import { TranslateHistoryColumn } from "@/app/(languageai)/languageai/history/translate/_components/translate-history-column";
import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TTranslateHistoryDataTableProps = {
  data: TTranslation[];
};

const TranslateHistoryDataTable = ({
  data,
}: TTranslateHistoryDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TranslateHistoryColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div>
      <div className="h-[75vh] lg:h-[85vh] overflow-y-auto">
        <DataTable table={table} tableCellClassName="align-top" />
      </div>
      <DataTablePagination table={table} />
    </div>
  );
};

export default TranslateHistoryDataTable;
