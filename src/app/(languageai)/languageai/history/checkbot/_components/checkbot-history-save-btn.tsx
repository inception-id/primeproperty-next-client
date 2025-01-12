import { Button } from "@/components/ui/button";
import { createTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { toast } from "react-toastify";
import { LuSave } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import {TCheckbot} from "@/lib/api/checkbot/createCheckbot";
import {createCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";

type TCheckbotHistorySaveBtnProps = {
    row: Row<TCheckbot>;
};

const CheckbotHistorySaveBtn = ({ row }: TCheckbotHistorySaveBtnProps) => {
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
