"use client";
import {getCoreRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table";
import {DataTable} from "@/components/ui/data-table";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import {TtsStorageColumn} from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-column";
import {DataTablePagination} from "@/components/ui/data-table-pagination";

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
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <>
            <div className="h-[75vh] lg:h-[85vh] overflow-y-auto">
                <DataTable table={table} tableCellClassName="align-top"/>
            </div>
            <DataTablePagination table={table}/>
        </>
    );
};

export default TextToSpeechStorageDataTable;
