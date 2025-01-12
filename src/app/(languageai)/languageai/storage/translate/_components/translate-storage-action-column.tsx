import { Row } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageDeleteDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";
import TranslateStorageUpdateDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-dialog";

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
    </div>
  );
};

export default TranslateStorageActionColumn;
