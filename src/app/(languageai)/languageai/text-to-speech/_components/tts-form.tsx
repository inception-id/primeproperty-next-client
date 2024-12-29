"use client";
import { Textarea } from "@/components/ui/textarea";
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

const TtsForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
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

    try {
      updateStore("isLoading", true);
      const token = await fetchCookieToken();
      if (!token) {
        updateLoginStore("openLoginDialog", true);
        return;
      }
      const audioUrl = await createSpeech(voice, responseFormat, input);
      if (audioUrl) {
        updateStore("audioUrl", audioUrl);
        toast.success("Success");
        return;
      }
      updateStore("audioUrl", "");
      toast.error("Something went wrong, please try again");
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
      <Textarea
        autoFocus
        name="input"
        placeholder="Enter text"
        className="focus-visible:ring-0 focus-visible:ring-offset-0 h-96 resize-none"
      />
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
