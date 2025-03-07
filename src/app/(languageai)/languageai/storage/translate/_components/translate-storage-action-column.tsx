import TranslateStorageDeleteDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";
import TranslateStorageUpdateDialog, {
  TTranslateStorageUpdateDialogProps,
} from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-dialog";

type TranslateStorageActionColumnProps =
  TTranslateStorageUpdateDialogProps & {};

const TranslateStorageActionColumn = ({
  id,
  title,
  content_language,
  content,
  target_language,
  updated_completion,
}: TranslateStorageActionColumnProps) => {
  return (
    <div className="flex flex-col gap-1">
      <TranslateStorageUpdateDialog
        id={id}
        title={title}
        content_language={content_language}
        content={content}
        target_language={target_language}
        updated_completion={updated_completion}
      />
      {/* TODO: Add editor to remove their own access to this translation */}
      <TranslateStorageDeleteDialog translationId={id} />
    </div>
  );
};

export default TranslateStorageActionColumn;
