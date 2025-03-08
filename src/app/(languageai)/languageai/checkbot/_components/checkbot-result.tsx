"use client";

import { LuCopy } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import CheckbotCompletion from "@/app/(languageai)/languageai/checkbot/_components/checkbot-completion";
import { useShallow } from "zustand/react/shallow";
import { useCheckbotStore } from "@/app/(languageai)/languageai/checkbot/_lib/useCheckbotStore";
import { toast } from "react-toastify";
import { createCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

const CheckbotResult = () => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const { updatedCompletion, checkbotId } = useCheckbotStore(
    useShallow((state) => ({
      checkbotId: state.checkbotId,
      updatedCompletion: state.updatedCompletion,
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
    <div className="border rounded-md flex-1 flex">
      <CheckbotCompletion />
      <div className="flex flex-col gap-1">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={async () => await copyToClipboard(updatedCompletion)}
        >
          <LuCopy />
        </Button>
        {checkbotId > 0 && (
          <LanguageAiSaveToStorageDialog
            label="Enter checkbot title"
            onSaveClick={onSaveClick}
          />
        )}
      </div>
    </div>
  );
};

export default CheckbotResult;
