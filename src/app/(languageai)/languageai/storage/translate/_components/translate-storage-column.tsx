import { ColumnDef } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageOriginalTextColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-original-text-column";
import TranslateStorageTranslationColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-translation-column";
import TranslateStorageActionColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-action-column";

export const TranslateStorageColumn: ColumnDef<TTranslationStorage>[] = [
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <TranslateStorageOriginalTextColumn row={row} />,
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
