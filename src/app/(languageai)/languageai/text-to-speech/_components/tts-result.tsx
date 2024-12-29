"use client";
import { useTextToSpeechStore } from "@/app/(languageai)/languageai/text-to-speech/_lib/useTextToSpeechStore";
import { useShallow } from "zustand/react/shallow";
import { buttonVariants } from "@/components/ui/button";
import { LuLoader } from "react-icons/lu";

const TtsResult = () => {
  const { audioUrl, isLoading } = useTextToSpeechStore(
    useShallow((state) => ({
      audioUrl: state.audioUrl,
      isLoading: state.isLoading,
    })),
  );

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

      <div className="flex items-center gap-2">
        <span>Link: </span>
        <a href={audioUrl} download className={buttonVariants()}>
          Download
        </a>
      </div>
    </div>
  );
};

export default TtsResult;
