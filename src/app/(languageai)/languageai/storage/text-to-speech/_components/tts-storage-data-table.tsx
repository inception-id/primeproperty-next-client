"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";
import { TtsStorageColumn } from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-column";

type TTextToSpeechStorageDataTableProps = {
  data: TTextToSpeechStorage[];
};

const TextToSpeechStorageDataTable = ({
  data,
}: TTextToSpeechStorageDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TtsStorageColumn,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
      <DataTable table={table} tableCellClassName="align-top" />
    </div>
  );
};

export default TextToSpeechStorageDataTable;
