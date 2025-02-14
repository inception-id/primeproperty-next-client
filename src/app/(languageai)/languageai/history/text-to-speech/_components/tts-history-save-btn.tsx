import { Row } from "@tanstack/table-core";
import { TTextToSpeech } from "@/lib/api/text-to-speech/createTextToSpeech";
import { Button } from "@/components/ui/button";
import { LuSave } from "react-icons/lu";
import { createTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";
import { toast } from "react-toastify";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { useShallow } from "zustand/react/shallow";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

type TtsHistorySaveBtnProps = {
  row: Row<TTextToSpeech>;
};

const TtsHistorySaveBtn = ({ row }: TtsHistorySaveBtnProps) => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const onSaveClick = async (title: string) => {
    try {
      const ttsStorage = await createTextToSpeechStorage(row.original.id, title);
      if (ttsStorage.status === 402) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Storage,
        );
        return;
      }
      if (ttsStorage.data.id) toast.success("Saved to storage");
      else toast.error("Fail to save, please try again");
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to save, please try again");
    }
  };
  return (
  <LanguageAiSaveToStorageDialog
      label="Enter audio title"
      onSaveClick={onSaveClick}
  />
  );
};

export default TtsHistorySaveBtn;
