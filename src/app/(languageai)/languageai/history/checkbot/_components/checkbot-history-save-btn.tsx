import { toast } from "react-toastify";
import { Row } from "@tanstack/table-core";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";
import { createCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { useShallow } from "zustand/react/shallow";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

type TCheckbotHistorySaveBtnProps = {
  row: Row<TCheckbot>;
};

const CheckbotHistorySaveBtn = ({ row }: TCheckbotHistorySaveBtnProps) => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const onSaveClick = async (title: string) => {
    try {
      const checkbotStorage = await createCheckbotStorage(row.original.id, {
        title,
        updated_completion: row.original.completion,
      });
      if (checkbotStorage.status === 402) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Storage,
        );
        return;
      }
      if (checkbotStorage.data.id) toast.success("Saved to storage");
    } catch (e) {
      console.error(e);
      toast.error("Fail to save, please try again");
    }
  };
  return (
    <LanguageAiSaveToStorageDialog
      label="Enter checkbot title"
      onSaveClick={onSaveClick}
    />
  );
};

export default CheckbotHistorySaveBtn;
