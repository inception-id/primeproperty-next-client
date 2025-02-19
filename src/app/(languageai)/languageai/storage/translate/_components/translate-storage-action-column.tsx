import { Row } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageDeleteDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";
import TranslateStorageUpdateDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-dialog";
import SharedTranslationDialog from "@/app/(languageai)/languageai/shared/_components/shared-translation-dialog";

type TTranslateStorageActionColumnProps = {
  row: Row<TTranslationStorage>;
};

const TranslateStorageActionColumn = ({
  row,
}: TTranslateStorageActionColumnProps) => {
  return (
    <div className="flex flex-col gap-1">
      <TranslateStorageUpdateDialog row={row} />
      <TranslateStorageDeleteDialog translationId={row.original.id} />
      <SharedTranslationDialog />
    </div>
  );
};

export default TranslateStorageActionColumn;
