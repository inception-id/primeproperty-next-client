import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import TranslateStorageDeleteDialog from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-delete-dialog";
import TranslateStorageUpdateDialog, {
    TTranslateStorageUpdateDialogProps
} from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-dialog";
import ShareStorageDialog from "@/app/(languageai)/languageai/shared/_components/share-storage-dialog";
import ShareTranslateStorageForm from "@/app/(languageai)/languageai/shared/translate/_components/share-storage-form";


const TranslateStorageActionColumn = ({
                                          id,
                                          title,
                                          content_language,
                                          content,
                                          target_language,
                                          updated_completion,
}: TTranslateStorageUpdateDialogProps) => {
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
      <TranslateStorageDeleteDialog translationId={id} />
      <ShareStorageDialog>
        <ShareTranslateStorageForm
          storageId={id}
          storageTitle={title}
        />
      </ShareStorageDialog>
    </div>
  );
};

export default TranslateStorageActionColumn;
