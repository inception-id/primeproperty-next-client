"use client";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { LuCopy, LuLoader } from "react-icons/lu";
import { useShallow } from "zustand/react/shallow";
import { useTranscriptionStore } from "@/app/(languageai)/languageai/speech-to-text/_lib/useTranscriptionStore";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { createSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

const TranscriptionResult = () => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const { text, updateStore, speechToTextId, isLoading } =
    useTranscriptionStore(
      useShallow((state) => ({
        isLoading: state.isLoading,
        speechToTextId: state.speechToTextId,
        text: state.text,
        updateStore: state.updateStore,
      })),
    );

  const onSaveClick = async (title: string) => {
    try {
      const savedTranscript = await createSpeechToTextStorage(speechToTextId, {
        title,
        updated_transcription_text: text,
      });
      if (savedTranscript.status === 402) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Storage,
        );
        return;
      }
      if (savedTranscript.data.id) {
        toast.success("Saved to storage");
      } else {
        toast.error("Fail to save, please try again");
      }
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to save, please try again");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-96">
        <LuLoader className="animate-spin text-5xl" />
      </div>
    );
  }

  if (!speechToTextId) {
    return <></>;
  }

  return (
    <div className="flex w-full border rounded-lg h-fit">
      <Textarea
        className="flex-1 h-[50vh] lg:h-[85vh] overflow-y-auto resize-none border-none focus-visible:ring-transparent ring-offset-transparent"
        value={text}
        onChange={(e) => updateStore("text", e.target.value)}
      />
      <div className="flex flex-col gap-1">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={async () => await copyToClipboard(text)}
        >
          <LuCopy />
        </Button>
        <LanguageAiSaveToStorageDialog
          label="Enter transcription title"
          onSaveClick={onSaveClick}
        />
      </div>
    </div>
  );
};

export default TranscriptionResult;
