import { ColumnDef } from "@tanstack/table-core";
import { TTranslationSharedStorage } from "@/lib/api/translation/find-translation-shared-storage";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateCompletionColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-completion-column";
import LanguageAiTableTitleColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-title-column";
import LanguageAiTableDateColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-date-column";

export const TranslateSharedStorageColumn: ColumnDef<TTranslationSharedStorage>[] =
  [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <LanguageAiTableTitleColumn row={row.original} />,
    },
      {
          accessorKey: "created_at",
          header: "Timestamp",
          cell: ({ row }) => <LanguageAiTableDateColumn showUpdatedAt={true} row={row.original} />,
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
          accessorKey: "owner_email",
          header: "Owner",
      },
      {
          accessorKey: "permission",
          header: "Access",
      },
    {
      accessorKey: "permission",
      header: "Action",
      // cell: ({ row }) => <></>,
    },
  ];
