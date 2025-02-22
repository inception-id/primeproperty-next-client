import TranslateStorageDeleteDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";
import TranslateStorageUpdateDialog, {
  TTranslateStorageUpdateDialogProps,
} from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-dialog";
import ShareStorageDialog from "@/app/(languageai)/languageai/shared/_components/share-storage-dialog";
import ShareTranslateStorageForm from "@/app/(languageai)/languageai/shared/translate/_components/share-storage-form";

type TranslateStorageActionColumnProps = TTranslateStorageUpdateDialogProps & {
   isOwner: boolean
    isEditor: boolean
}

const TranslateStorageActionColumn = (
    {
  id,
  title,
  content_language,
  content,
  target_language,
  updated_completion,
        isOwner,
        isEditor,
}:  TranslateStorageActionColumnProps) => {
  return (
    <div className="flex flex-col gap-1">
        {isEditor && <TranslateStorageUpdateDialog
        id={id}
        title={title}
        content_language={content_language}
        content={content}
        target_language={target_language}
        updated_completion={updated_completion}
      />}
        {/* TODO: Add editor to remove their own access to this translation */}
        {isOwner && <TranslateStorageDeleteDialog translationId={id} />}
      <ShareStorageDialog>
        <ShareTranslateStorageForm isEditor={isEditor} storageId={id} storageTitle={title} />
      </ShareStorageDialog>
    </div>
  );
};

export default TranslateStorageActionColumn;
