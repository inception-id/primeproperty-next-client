import {Button} from "@/components/ui/button";
import {LuSave} from "react-icons/lu";
import {Row} from "@tanstack/table-core";
import {TSpeechToText} from "@/lib/api/speech-to-text/createTranscription";
import {toast} from "react-toastify";
import {createSpeechToTextStorage} from "@/lib/api/speech-to-text/createTranscriptionStorage";
import {useLanguageaiSubscriptionStore} from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import {useShallow} from "zustand/react/shallow";
import {ELanguageaSubscriptionLimit} from "@/lib/enums/languageai-subscription-limit";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

type TTranscriptionHistorySaveBtnProps = {
    row: Row<TSpeechToText>;
};

const TranscriptionHistorySaveBtn = ({
                                         row,
                                     }: TTranscriptionHistorySaveBtnProps) => {
    const {updateSubscriptionStore} = useLanguageaiSubscriptionStore(
        useShallow((state) => ({
            updateSubscriptionStore: state.updateStore,
        })),
    );
    const onClick = async (title: string) => {
        try {
            const transcriptStorage = await createSpeechToTextStorage(
                row.original.id,
                {title, updated_transcription_text: row.original.transcription_text}
            );
            if (transcriptStorage.status === 402) {
                updateSubscriptionStore(
                    "limitDialog",
                    ELanguageaSubscriptionLimit.Storage,
                );
                return;
            }
            if (transcriptStorage.data.id) {
                toast.success("Saved to storage");
            }
        } catch (e: any) {
            console.error(e.message);
            toast.error("Fail to save, please try again");
        }
    };
    return (
        <LanguageAiSaveToStorageDialog
            label="Enter transcription title"
            onSaveClick={onClick}
        />
    );
};

export default TranscriptionHistorySaveBtn;
