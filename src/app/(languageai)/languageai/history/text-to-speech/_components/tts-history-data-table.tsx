"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TTextToSpeech } from "@/lib/api/text-to-speech/createTextToSpeech";
import { TtsHistoryColumn } from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-history-column";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TTextToSpeechHistoryDataTableProps = {
  data: TTextToSpeech[];
};

const TextToSpeechHistoryDataTable = ({
  data,
}: TTextToSpeechHistoryDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TtsHistoryColumn,
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

export default TextToSpeechHistoryDataTable;
