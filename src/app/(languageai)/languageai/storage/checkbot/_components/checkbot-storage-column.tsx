import { ColumnDef } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageTranslationColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-translation-column";
import TranslateStorageActionColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-action-column";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import CheckbotStorageOriginalTextColumn from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-original-text-column";
import CheckbotStorageResultlColumn from "@/app/(languageai)/languageai/storage/checkbot/_components/translate-storage-resullt-column";

export const CheckbotStorageColumn: ColumnDef<TCheckbotStorage>[] = [
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <CheckbotStorageOriginalTextColumn row={row} />,
  },
  {
    accessorKey: "updated_completion",
    header: "Result",
    cell: ({ row }) => <CheckbotStorageResultlColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    // cell: ({ row }) => <TranslateStorageActionColumn row={row} />,
  },
];
