"use client";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import TtsVoiceSelect from "@/app/(languageai)/languageai/text-to-speech/_components/tts-voice-select";
import TtsFormatSelect from "@/app/(languageai)/languageai/text-to-speech/_components/tts-format-select";
import { createSpeech, TOpenAiVoice } from "@/lib/openai/createSpeech";
import { useTextToSpeechStore } from "@/app/(languageai)/languageai/text-to-speech/_lib/useTextToSpeechStore";
import { LuLoader } from "react-icons/lu";
import { createTextToSpeech } from "@/lib/api/text-to-speech/createTextToSpeech";
import TtsTextarea from "@/app/(languageai)/languageai/text-to-speech/_components/tts-textarea";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { checkLanguageaiSubscriptionExceedLimit } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-exceed-limit";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";

const TtsForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );

  const { updateStore, isLoading } = useTextToSpeechStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
      isLoading: state.isLoading,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const input = formData.get("input") as string;
    const voice = formData.get("voice") as TOpenAiVoice;
    const responseFormat = formData.get("response_format") as "mp3" | "wav";

    if (!input) {
      toast.error("Please enter your text");
      return;
    }

    if (!voice) {
      toast.error("Please select voice");
      return;
    }

    updateStore("audioUrl", "");
    updateStore("ttsId", "");
    try {
      updateStore("isLoading", true);
      const token = await fetchCookieToken();
      if (!token) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      const passLimit = await checkLanguageaiSubscriptionExceedLimit(
        ELanguageaSubscriptionLimit.TextToSpeech,
      );
      if (passLimit.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      if (passLimit.data) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.TextToSpeech,
        );
        return;
      }

      const audioUrl = await createSpeech(voice, responseFormat, input);
      const tts = await createTextToSpeech(input, audioUrl, voice);
      updateStore("audioUrl", tts.data.audio_url);
      updateStore("ttsId", tts.data.id);
      toast.success("Success");
      return;
    } catch (e: any) {
      console.error(e.message);
      toast.error("Something went wrong, please try again");
      updateStore("audioUrl", "");
    } finally {
      updateStore("isLoading", false);
    }
  };
  return (
    <form action={handleAction} className="mb-4">
      <TtsTextarea />
      <div className="flex items-center justify-end w-full gap-2 lg:gap-4 p-2">
        <TtsVoiceSelect />
        <TtsFormatSelect />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LuLoader className="animate-spin" /> : "Convert"}
        </Button>
      </div>
    </form>
  );
};

export default TtsForm;
