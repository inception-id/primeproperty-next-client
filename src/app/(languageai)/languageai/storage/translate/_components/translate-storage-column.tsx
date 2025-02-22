import { ColumnDef } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageActionColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-action-column";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateCompletionColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-completion-column";
import LanguageAiTableTitleColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-title-column";
import LanguageAiTableDateColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-date-column";

export const TranslateStorageColumn: ColumnDef<TTranslationStorage>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <LanguageAiTableTitleColumn row={row.original} />,
  },
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <TranslateContentColumn row={row.original} />,
  },
  {
    accessorKey: "updated_completion",
    header: "Translation",
    cell: ({ row }) => <TranslateCompletionColumn row={row.original} />,
  },
  {
    accessorKey: "created_at",
    header: "Timestamp",
    cell: ({ row }) => <LanguageAiTableDateColumn showUpdatedAt={true} row={row.original} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TranslateStorageActionColumn row={row} />,
  },
];
