"use client";

import { useContext } from "react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import { UseCompletionHelpers } from "@ai-sdk/react";
import {LuBookmark, LuCopy, LuGripHorizontal, LuSave} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import {Textarea} from "@/components/ui/textarea";
import {useTranslateStore} from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import {useShallow} from "zustand/react/shallow";
import SaveTranslationButton from "@/app/(languageai)/languageai/translate/_components/save-translation-button";

const TranslateResult = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);

    const { } = useTranslateStore(
        useShallow((state) => ({
            aiSystemPrompt: state.aiSystemPrompt,
            contentLanguage: state.contentLanguage,
            targetLanguage: state.targetLanguage,
        })),
    );


  return (
    <div className="p-2 border rounded-md overflow-hidden">
      <div className="text-xs flex items-center gap-1 mb-2 lg:hidden opacity-50">
        * Drag <LuGripHorizontal /> icon to resize
      </div>
      <div className="flex gap-4 w-full">
          <Textarea
              className="text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto border-none resize-none"
              value={completion}
              disabled={!completion}
              placeholder={isLoading ? "Translating...":
                  "Translation will show here"}
          />
          <div className="flex flex-col gap-2 flex-1">
              <SaveTranslationButton />
        <Button
          type="button"
          variant="secondary"
          onClick={async () => await copyToClipboard(completion)}
          disabled={!completion}
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
