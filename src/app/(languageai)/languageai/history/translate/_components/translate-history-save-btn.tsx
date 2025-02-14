import { createTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { toast } from "react-toastify";
import { Row } from "@tanstack/table-core";
import { TTranslation } from "@/lib/api/translation/createTranslation";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { useShallow } from "zustand/react/shallow";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

type TTranslateHistorySaveBtnProps = {
  row: Row<TTranslation>;
};

const TranslateHistorySaveBtn = ({ row }: TTranslateHistorySaveBtnProps) => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const onSaveClick = async (title: string) => {
          try {
            const translationStorage = await createTranslationStorage(
              row.original.id,
              { title, updated_completion: row.original.completion },
            );
            if (translationStorage.status === 402) {
              updateSubscriptionStore(
                "limitDialog",
                ELanguageaSubscriptionLimit.Storage,
              );
              return;
            }
            if (translationStorage.data.id) toast.success("Saved to storage");
          } catch (e) {
            console.error(e);
            toast.error("Fail to save, please try again");
          }
  }
  return (
      <LanguageAiSaveToStorageDialog
          label="Enter translation title"
          onSaveClick={onSaveClick}
      />
  );
};

export default TranslateHistorySaveBtn;
