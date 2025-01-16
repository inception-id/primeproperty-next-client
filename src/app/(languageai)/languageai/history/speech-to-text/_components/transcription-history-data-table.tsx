"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TSpeechToText } from "@/lib/api/speech-to-text/createTranscription";
import { TranscriptionHistoryColumn } from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-table-column";

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
  });
  return (
    <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
      <DataTable table={table} tableCellClassName="align-top" />
    </div>
  );
};

export default TranscriptionHistoryDataTable;
