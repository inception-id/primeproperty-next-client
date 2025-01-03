'use client'
import {getCoreRowModel,useReactTable} from "@tanstack/react-table";
import {TTranslation} from "@/lib/api/translation/createTranslation";
import {
    TranslateHistoryColumn
} from "@/app/(languageai)/languageai/history/translate/_components/translate-history-column";
import {DataTable} from "@/components/ui/data-table";

type TTranslateHistoryDataTableProps = {
    data: TTranslation[]
}

const TranslateHistoryDataTable = ({data}: TTranslateHistoryDataTableProps) => {
    const table = useReactTable({
        data,
        columns: TranslateHistoryColumn,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="h-[80vh] lg:h-[90vh] overflow-y-auto">
            <DataTable table={table}/>
        </div>
    )
};

export default TranslateHistoryDataTable;