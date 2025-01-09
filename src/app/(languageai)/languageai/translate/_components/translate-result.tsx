"use client";
import { LuCopy, LuGripHorizontal, LuSave } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { Textarea } from "@/components/ui/textarea";
import { useTranslationStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";
import TranslateCompletion from "@/app/(languageai)/languageai/translate/_components/translate-completion";
import { createTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { toast } from "react-toastify";

const TranslateResult = () => {
  const { updatedCompletion, updateStore, translationId } = useTranslationStore(
    useShallow((state) => ({
      translationId: state.translationId,
      updatedCompletion: state.updatedCompletion,
      updateStore: state.updateStore,
    })),
  );

  return (
    <div className="border rounded-md overflow-hidden h-fit">
      <div className="text-xs flex items-center gap-1 p-2 lg:hidden opacity-50">
        * Drag <LuGripHorizontal /> icon to resize
      </div>
      <div className="flex gap-2">
        {updatedCompletion ? (
          <Textarea
            value={updatedCompletion}
            className="placeholder:opacity-50 flex-1 text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto focus-visible:ring-transparent border-none resize-none"
            onChange={(e) => updateStore("updatedCompletion", e.target.value)}
          />
        ) : (
          <TranslateCompletion />
        )}
        <div className="flex flex-col gap-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={async () => await copyToClipboard(updatedCompletion)}
          >
            <LuCopy />
          </Button>
          {translationId && (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={async () => {
                try {
                  const translationStorage = await createTranslationStorage(
                    translationId,
                    updatedCompletion,
                  );
                  if (translationStorage.data.id)
                    toast.success("Saved to storage");
                } catch (e) {
                  console.error(e);
                  toast.error("Fail to save, please try again");
                }
              }}
            >
              <LuSave />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslateResult;
