"use client";

import { LuCopy, LuGripHorizontal } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { useTranslateStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";
import SaveTranslationButton from "@/app/(languageai)/languageai/translate/_components/save-translation-button";
import TranslateTextarea from "@/app/(languageai)/languageai/translate/_components/translate-textarea";

const TranslateResult = () => {

  const { updatedCompletion } = useTranslateStore(
    useShallow((state) => ({
        updatedCompletion: state.updatedCompletion
    })),
  );

  return (
    <div className="p-2 border rounded-md overflow-hidden">
      <div className="text-xs flex items-center gap-1 mb-2 lg:hidden opacity-50">
        * Drag <LuGripHorizontal /> icon to resize
      </div>
      <div className="flex gap-4 w-full">
          <TranslateTextarea />
        <div className="flex flex-col gap-2 flex-1">
          <SaveTranslationButton />
          <Button
            type="button"
            variant="secondary"
            onClick={async () => await copyToClipboard(updatedCompletion)}
            disabled={!updatedCompletion}
          >
            <LuCopy />
            <span className="hidden lg:block">Copy</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TranslateResult;
