import { ColumnDef } from "@tanstack/table-core";
import { TTranslationSharedStorage } from "@/lib/api/translation/find-translation-shared-storage";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";
import TranslateCompletionColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-completion-column";
import LanguageAiTableTitleColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-title-column";
import LanguageAiTableDateColumn from "@/app/(languageai)/_components/table-columns/language-ai-table-date-column";
import { useQuery } from "@tanstack/react-query";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { decode, JwtPayload } from "jsonwebtoken";
import TranslateStorageActionColumn from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-action-column";
import { LanguageeAiStoragePermission } from "@/lib/enums/languageeai-storage-permission";

export const TranslateSharedStorageColumn =
  (): ColumnDef<TTranslationSharedStorage>[] => {
    const { data, isLoading } = useQuery({
      queryKey: ["translateSharedStorageToken"],
      queryFn: async () => {
        const token = (await fetchCookieToken()) as string;
        return decode(token) as JwtPayload;
      },
    });

    return [
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => <LanguageAiTableTitleColumn row={row.original} />,
      },
      {
        accessorKey: "created_at",
        header: "Timestamp",
        cell: ({ row }) => (
          <LanguageAiTableDateColumn showUpdatedAt={true} row={row.original} />
        ),
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
        cell: ({ row }) =>
          data?.id === row.original.owner_id ? "Me" : row.original.owner_email,
      },
      {
        accessorKey: "permission",
        header: "Access",
        cell: ({ row }) =>
          data?.id === row.original.owner_id
            ? "Owner"
            : row.original.permission,
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
          if (isLoading) return <></>;
          return (
            <TranslateStorageActionColumn
              id={row.original.storage_id}
              title={row.original.title}
              content_language={row.original.content_language}
              content={row.original.content}
              target_language={row.original.target_language}
              updated_completion={row.original.updated_completion}
              isOwner={data?.id === row.original.owner_id}
              isEditor={
                data?.id === row.original.owner_id ||
                row.original.permission === LanguageeAiStoragePermission.Edit
              }
            />
          );
        },
      },
    ];
  };
