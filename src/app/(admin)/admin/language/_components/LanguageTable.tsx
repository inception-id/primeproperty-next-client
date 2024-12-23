"use client";

import {getCoreRowModel, getSortedRowModel, SortingState, useReactTable} from "@tanstack/react-table";
import {DataTable} from "@/components/ui/data-table";
import {LanguageTableColumns} from "@/app/(admin)/admin/language/_components/LanguageTableColumns";
import {TLanguage} from "@/lib/api/languages/createLanguage";
import {DataTablePagination} from "@/components/ui/data-table-pagination";
import {useState} from "react";

type TLanguagesTableProps = {
    data: TLanguage[];
};

const LanguagesTable = ({data}: TLanguagesTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const table = useReactTable({
        data,
        columns: LanguageTableColumns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: { sorting }
    });

    return (
        <div className="mt-4">
            <div className="max-h-[85vh]">
                <DataTable table={table}/>
            </div>
            <div className="flex items-center justify-between">
                <span className="opacity-50">10 per page</span>
                <DataTablePagination table={table}/>
            </div>
        </div>
    );
};

export default LanguagesTable;
