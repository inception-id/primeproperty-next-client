import {Row} from "@tanstack/table-core";
import {TTextToSpeech} from "@/lib/api/text-to-speech/createTextToSpeech";
import {Button} from "@/components/ui/button";
import {LuSave} from "react-icons/lu";
import {createTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import {toast} from "react-toastify";

type TtsHistorySaveBtnProps = {
    row: Row<TTextToSpeech>
}

const TtsHistorySaveBtn = ({row}: TtsHistorySaveBtnProps) => {
    const onSaveClick = async () => {
        try {
            const ttsStorage = await createTextToSpeechStorage(row.original.id);
            if (ttsStorage.data.id) toast.success("Saved to storage");
            else toast.error("Fail to save, please try again")
        } catch (e:any) {
            console.error(e.message);
            toast.error("Fail to save, please try again")
        }
    }
    return (
        <Button size="icon" variant="ghost" onClick={onSaveClick}>
            <LuSave />
        </Button>
    )
};

export default TtsHistorySaveBtn