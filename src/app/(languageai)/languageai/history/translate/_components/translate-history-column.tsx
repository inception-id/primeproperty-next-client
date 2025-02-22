import { ColumnDef } from "@tanstack/table-core";
import { TTranslation } from "@/lib/api/translation/createTranslation";
import TranslateHistorySaveBtn from "@/app/(languageai)/languageai/history/translate/_components/translate-history-save-btn";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateCompletionColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-completion-column";
import LanguageAiTableDateColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-date-column";

export const TranslateHistoryColumn: ColumnDef<TTranslation>[] = [
  {
    accessorKey: "created_at",
    header: "Timestamp",
    cell: ({ row }) => <LanguageAiTableDateColumn showUpdatedAt={false} row={row.original} />,
  },
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <TranslateContentColumn row={row.original} />,
  },
  {
    accessorKey: "completion",
    header: "Translated Text",
    cell: ({ row }) => <TranslateCompletionColumn row={row.original} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TranslateHistorySaveBtn row={row} />,
  },
];
