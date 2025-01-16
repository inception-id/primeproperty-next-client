import {Button} from "@/components/ui/button";
import {LuSave} from "react-icons/lu";
import {Row} from "@tanstack/table-core";
import {TSpeechToText} from "@/lib/api/speech-to-text/createTranscription";
import {toast} from "react-toastify";
import {createSpeechToTextStorage} from "@/lib/api/speech-to-text/createTranscriptionStorage";

type TTranscriptionHistorySaveBtnProps = {
    row: Row<TSpeechToText>
}

const TranscriptionHistorySaveBtn = ({row}: TTranscriptionHistorySaveBtnProps) => {
    const onClick = async () => {
        try {
           const transcriptStorage = await createSpeechToTextStorage(row.original.id, row.original.transcription_text);
           if (transcriptStorage.data.id) {
               toast.success("Saved to storage")
           } else {
               toast.error("Fail to save, please try again");
           }
        } catch (e:any) {
           console.error(e.message)
            toast.error("Fail to save, please try again");
        }
    }
    return (
       <Button variant="ghost" size="icon" onClick={onClick}>
           <LuSave />
       </Button>
    )
};

export default TranscriptionHistorySaveBtn;