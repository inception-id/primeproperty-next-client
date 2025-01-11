import { Row } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageDeleteDialog
    from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";

type TTranslateStorageActionColumnProps = {
  row: Row<TTranslationStorage>;
};

const TranslateStorageActionColumn = ({
  row,
}: TTranslateStorageActionColumnProps) => {
  return <div>
      <TranslateStorageDeleteDialog translationId={row.original.id} />
  </div>;
};

export default TranslateStorageActionColumn;
