"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { TranscriptionStorageColumn } from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-column";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

type TTranscriptionStorageDataTableProps = {
  data: TSpeechToTextStorage[];
};

const TranscriptionStorageDataTable = ({
  data,
}: TTranscriptionStorageDataTableProps) => {
  const table = useReactTable({
    data,
    columns: TranscriptionStorageColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <div className="h-[75vh] lg:h-[80vh] overflow-y-auto">
        <DataTable table={table} tableCellClassName="align-top" />
      </div>
      <DataTablePagination table={table} />
    </>
  );
};

export default TranscriptionStorageDataTable;
