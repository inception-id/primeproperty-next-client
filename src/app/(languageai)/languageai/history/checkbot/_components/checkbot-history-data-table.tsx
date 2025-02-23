"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { CheckbotHistoryColumn } from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-history-column";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TCheckbotHistoryDataTableProps = {
  data: TCheckbot[];
};

const CheckbotHistoryDataTable = ({ data }: TCheckbotHistoryDataTableProps) => {
  const table = useReactTable({
    data,
    columns: CheckbotHistoryColumn,
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

export default CheckbotHistoryDataTable;
