"use client";
import { useTextToSpeechStore } from "@/app/(languageai)/languageai/text-to-speech/_lib/useTextToSpeechStore";
import { useShallow } from "zustand/react/shallow";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuLoader, LuSave } from "react-icons/lu";
import { toast } from "react-toastify";
import { createTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";
import {useLanguageaiSubscriptionStore} from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import {ELanguageaSubscriptionLimit} from "@/lib/enums/languageai-subscription-limit";

const TtsResult = () => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
      useShallow((state) => ({
        updateSubscriptionStore: state.updateStore,
      })),
  );
  const { audioUrl, isLoading, ttsId } = useTextToSpeechStore(
    useShallow((state) => ({
      audioUrl: state.audioUrl,
      isLoading: state.isLoading,
      ttsId: state.ttsId,
    })),
  );

  const onSaveClick = async () => {
    try {
      const ttsStorage = await createTextToSpeechStorage(ttsId);
      if (ttsStorage.status === 402) {
        updateSubscriptionStore("limitDialog", ELanguageaSubscriptionLimit.Storage);
        return;
      }
      if (ttsStorage.data.id) toast.success("Saved to storage");
      else toast.error("Fail to save, please try again");
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to save, please try again");
    }
  };

  if (isLoading) {
    return (
      <div className="lg:max-w-lg mx-auto flex items-center justify-center">
        <LuLoader className="text-5xl animate-spin" />
      </div>
    );
  }

  if (!audioUrl) {
    return <></>;
  }

  return (
    <div className="lg:max-w-lg mx-auto">
      <div className="w-full mb-4">
        <div className="mb-2">Audio Preview</div>
        <audio controls className="w-full">
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>Link: </span>
          <a href={audioUrl} download className={buttonVariants()}>
            Download
          </a>
        </div>
        <Button size="icon" variant="ghost" onClick={onSaveClick}>
          <LuSave />
        </Button>
      </div>
    </div>
  );
};

export default TtsResult;
