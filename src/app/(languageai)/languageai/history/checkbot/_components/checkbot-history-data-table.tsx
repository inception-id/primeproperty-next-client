"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { CheckbotHistoryColumn } from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-history-column";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";

type TCheckbotHistoryDataTableProps = {
  data: TCheckbot[];
};

const CheckbotHistoryDataTable = ({ data }: TCheckbotHistoryDataTableProps) => {
  const table = useReactTable({
    data,
    columns: CheckbotHistoryColumn,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
      <DataTable table={table} tableCellClassName="align-top" />
    </div>
  );
};

export default CheckbotHistoryDataTable;
