"use client";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { LuCopy } from "react-icons/lu";
import { useShallow } from "zustand/react/shallow";
import { useTranscriptionStore } from "@/app/(languageai)/languageai/speech-to-text/_lib/useTranscriptionStore";

const TranscriptionResult = () => {
  const { text } = useTranscriptionStore(
    useShallow((state) => ({
      text: state.text,
    })),
  );

  if (!text) {
    return <></>;
  }

  return (
    <div className="flex w-full border rounded-lg ">
      <div className="flex-1 max-h-[55vh] lg:max-h-[90vh] overflow-y-auto p-4 whitespace-pre-line">
        {text}
      </div>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={async () => await copyToClipboard(text)}
      >
        <LuCopy />
      </Button>
    </div>
  );
};

export default TranscriptionResult;
