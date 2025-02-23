"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import { CheckbotStorageColumn } from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-column";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TCheckbotStorageDataTableProps = {
  data: TCheckbotStorage[];
};

const CheckbotStorageDataTable = ({ data }: TCheckbotStorageDataTableProps) => {
  const table = useReactTable({
    data,
    columns: CheckbotStorageColumn,
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

export default CheckbotStorageDataTable;
