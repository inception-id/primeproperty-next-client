import { ColumnDef } from "@tanstack/table-core";
import { TTranslationSharedStorage } from "@/lib/api/translation/find-translation-shared-storage";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateTitleColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-title-column";
import TranslateCompletionColumn
    from "@/app/(languageai)/languageai/translate/_components/columns/translate-completion-column";

export const TranslateSharedStorageColumn: ColumnDef<TTranslationSharedStorage>[] =
  [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <TranslateTitleColumn row={row.original} />,
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
      accessorKey: "content",
      header: "Original Text",
      cell: ({ row }) => <TranslateContentColumn row={row.original} />,
    },
    {
      accessorKey: "updated_completion",
      header: "Translation",
        cell: ({row}) => <TranslateCompletionColumn row={row.original} />
    },
    {
      accessorKey: "owner_email",
      header: "Action",
        cell: ({row}) => <></>
    },
  ];
