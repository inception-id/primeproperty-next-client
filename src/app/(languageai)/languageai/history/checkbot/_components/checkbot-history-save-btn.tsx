import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { LuSave } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";
import { createCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import {useLanguageaiSubscriptionStore} from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import {useShallow} from "zustand/react/shallow";
import {ELanguageaSubscriptionLimit} from "@/lib/enums/languageai-subscription-limit";

type TCheckbotHistorySaveBtnProps = {
  row: Row<TCheckbot>;
};

const CheckbotHistorySaveBtn = ({ row }: TCheckbotHistorySaveBtnProps) => {
    const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
        useShallow((state) => ({
            updateSubscriptionStore: state.updateStore,
        })),
    );
  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={async () => {
        try {
          const checkbotStorage = await createCheckbotStorage(
            row.original.id,
            row.original.completion,
          );
          if (checkbotStorage.status === 402) {
              updateSubscriptionStore("limitDialog", ELanguageaSubscriptionLimit.Storage);
              return;
          }
          if (checkbotStorage.data.id) toast.success("Saved to storage");
        } catch (e) {
          console.error(e);
          toast.error("Fail to save, please try again");
        }
      }}
    >
      <LuSave />
    </Button>
  );
};

export default CheckbotHistorySaveBtn;
