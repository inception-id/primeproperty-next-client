import { Row } from "@tanstack/table-core";
import { TTextToSpeech } from "@/lib/api/text-to-speech/createTextToSpeech";
import { Button } from "@/components/ui/button";
import { LuSave } from "react-icons/lu";
import { createTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";
import { toast } from "react-toastify";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { useShallow } from "zustand/react/shallow";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";

type TtsHistorySaveBtnProps = {
  row: Row<TTextToSpeech>;
};

const TtsHistorySaveBtn = ({ row }: TtsHistorySaveBtnProps) => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const onSaveClick = async () => {
    try {
      const ttsStorage = await createTextToSpeechStorage(row.original.id);
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
    <Button size="icon" variant="ghost" onClick={onSaveClick}>
      <LuSave />
    </Button>
  );
};

export default TtsHistorySaveBtn;
