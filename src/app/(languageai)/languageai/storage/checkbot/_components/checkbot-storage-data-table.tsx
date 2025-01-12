"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import {TCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";
import {
  CheckbotStorageColumn
} from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-column";

type TCheckbotStorageDataTableProps = {
  data: TCheckbotStorage[];
};

const CheckbotStorageDataTable = ({
  data,
}: TCheckbotStorageDataTableProps) => {
  const table = useReactTable({
    data,
    columns: CheckbotStorageColumn,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
      <DataTable table={table} tableCellClassName="align-top" />
    </div>
  );
};

export default CheckbotStorageDataTable;
