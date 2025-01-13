import {Row} from "@tanstack/table-core";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import {Button} from "@/components/ui/button";
import {LuTrash} from "react-icons/lu";
import {toast} from "react-toastify";
import {deleteTextToSpeechStorage} from "@/lib/api/text-to-speech/delete-tts-storage";
import {useRouter} from "next/navigation";

type TtsStorageDeleteBtnProps = {
    row: Row<TTextToSpeechStorage>
}

const TtsStorageDeleteBtn = ({row}: TtsStorageDeleteBtnProps) => {
    const router = useRouter()
    const onDeleteClick = async () => {
        try {
           const deletedStorage = await deleteTextToSpeechStorage(row.original.id);
           if (deletedStorage.data.id){ toast.success("Deleted successfully")
               router.refresh();
           }
           else toast.error("Fail to delete, please try again");
        } catch (e) {
           console.error(e);
           toast.error("Fail to delete, please try again");
        }
    }
    return (
        <Button size="icon" variant="ghost" onClick={onDeleteClick}>
           <LuTrash />
        </Button>
    )
};

export default TtsStorageDeleteBtn