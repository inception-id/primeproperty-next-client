"use client";

import { LuCopy, LuSave } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import CheckbotCompletion from "@/app/(languageai)/languageai/checkbot/_components/checkbot-completion";
import { useShallow } from "zustand/react/shallow";
import { useCheckbotStore } from "@/app/(languageai)/languageai/checkbot/_lib/useCheckbotStore";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { createCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import { useContext } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { CheckbotContext } from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

const CheckbotResult = () => {
  const { isLoading } = useContext<UseCompletionHelpers>(CheckbotContext);
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const { updatedCompletion, updateStore, checkbotId } = useCheckbotStore(
    useShallow((state) => ({
      checkbotId: state.checkbotId,
      updatedCompletion: state.updatedCompletion,
      updateStore: state.updateStore,
    })),
  );

  const onSaveClick = async (title: string) => {
    try {
      const storage = await createCheckbotStorage(checkbotId, {
        title,
        updated_completion: updatedCompletion,
      });
      if (storage.status === 402) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Storage,
        );
        return;
      }
      if (storage.data.id) toast.success("Saved to storage");
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to save, please try again");
    }
  };
  return (
    <div className="border rounded-md overflow-hidden h-fit">
      <div className="flex gap-2">
        {updatedCompletion ? (
          <Textarea
            value={updatedCompletion}
            className="placeholder:opacity-50 flex-1 text-sm h-60 lg:h-[90vh] overflow-y-auto focus-visible:ring-transparent border-none resize-none"
            onChange={(e) => updateStore("updatedCompletion", e.target.value)}
          />
        ) : (
          <CheckbotCompletion />
        )}
        <div className="flex flex-col gap-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={async () =>
              isLoading
                ? toast.warning("Text is still loading")
                : await copyToClipboard(updatedCompletion)
            }
          >
            <LuCopy />
          </Button>
          {!isLoading && checkbotId > 0 && (
            <LanguageAiSaveToStorageDialog
              label="Enter checkbot title"
              onSaveClick={onSaveClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckbotResult;
