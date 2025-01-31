"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TSpeechToText } from "@/lib/api/speech-to-text/createTranscription";
import { TranscriptionHistoryColumn } from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-table-column";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TTranscriptionHistoryDataTableProps = {
  data: TSpeechToText[];
};

const TranscriptionHistoryDataTable = ({
  data,
}: TTranscriptionHistoryDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TranscriptionHistoryColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <div className="h-[75vh] lg:h-[85vh] overflow-y-auto">
        <DataTable table={table} tableCellClassName="align-top" />
      </div>
      <DataTablePagination table={table} />
    </>
  );
};

export default TranscriptionHistoryDataTable;
