"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TTextToSpeech } from "@/lib/api/text-to-speech/createTextToSpeech";
import { TtsHistoryColumn } from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-history-column";

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
  });
  return (
    <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
      <DataTable table={table} />
    </div>
  );
};

export default TextToSpeechHistoryDataTable;
