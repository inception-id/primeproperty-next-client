import { ColumnDef } from "@tanstack/table-core";
import { TTranslationSharedStorage } from "@/lib/api/translation/find-translation-shared-storage";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateTitleColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-title-column";

export const TranslateSharedStorageColumn: ColumnDef<TTranslationSharedStorage>[] =
  [
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
    },
    {
      accessorKey: "permission",
      header: "Permission",
    },
    {
      accessorKey: "owner_email",
      header: "Owner",
    },
    {
      accessorKey: "owner_email",
      header: "Action",
    },
  ];
