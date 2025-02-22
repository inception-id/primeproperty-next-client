import { ColumnDef } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageTranslationColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-translation-column";
import TranslateStorageActionColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-action-column";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateTitleColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-title-column";

export const TranslateStorageColumn: ColumnDef<TTranslationStorage>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <TranslateTitleColumn row={row.original} />,
  },
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <TranslateContentColumn row={row.original} />,
  },
  {
    accessorKey: "updated_completion",
    header: "Translation",
    cell: ({ row }) => <TranslateStorageTranslationColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TranslateStorageActionColumn row={row} />,
  },
];
