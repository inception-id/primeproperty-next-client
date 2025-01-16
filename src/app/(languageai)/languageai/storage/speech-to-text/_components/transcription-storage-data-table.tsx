"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import {
    TranscriptionStorageColumn
} from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-column";
import {TSpeechToTextStorage} from "@/lib/api/speech-to-text/createTranscriptionStorage";

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
    });
    return (
        <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
            <DataTable table={table} tableCellClassName="align-top" />
        </div>
    );
};

export default TranscriptionStorageDataTable;
