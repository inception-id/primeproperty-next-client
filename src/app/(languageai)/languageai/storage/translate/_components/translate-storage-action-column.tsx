import { Row } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageDeleteDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";
import TranslateStorageUpdateDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-dialog";
import ShareStorageDialog from "@/app/(languageai)/languageai/shared/_components/share-storage-dialog";
import ShareTranslateStorageForm from "@/app/(languageai)/languageai/shared/translate/_components/share-storage-form";

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
      <ShareStorageDialog>
        <ShareTranslateStorageForm storageId={row.original.id} />
      </ShareStorageDialog>
    </div>
  );
};

export default TranslateStorageActionColumn;
