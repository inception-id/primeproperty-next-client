import {Button} from "@/components/ui/button";
import {createTranslationStorage} from "@/lib/api/translation/createTranslationStorage";
import {toast} from "react-toastify";
import {LuSave} from "react-icons/lu";
import {Row} from "@tanstack/table-core";
import {TTranslation} from "@/lib/api/translation/createTranslation";

type TTranslateHistorySaveBtnProps = {
    row: Row<TTranslation>
}

const TranslateHistorySaveBtn = ({row}: TTranslateHistorySaveBtnProps) => {
    return (
        <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={async () => {
                try {
                    const translationStorage = await createTranslationStorage(
                        row.original.id,
                        row.original.completion,
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
    )
};

export default TranslateHistorySaveBtn