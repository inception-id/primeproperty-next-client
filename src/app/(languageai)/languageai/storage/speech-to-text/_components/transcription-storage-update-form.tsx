import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuSave, LuX } from "react-icons/lu";
import { Textarea } from "@/components/ui/textarea";
import { Row } from "@tanstack/table-core";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import {TSpeechToTextStorage} from "@/lib/api/speech-to-text/createTranscriptionStorage";
import {updateTranscriptionStorage} from "@/lib/api/speech-to-text/update-transcription-storage";

type TranscriptionStorageUpdateFormProps = {
  row: Row<TSpeechToTextStorage>;
  onCloseClick: () => void;
};

const TranscriptionStorageUpdateForm = ({
  onCloseClick,
  row,
}: TranscriptionStorageUpdateFormProps) => {
  const router = useRouter();
  const handleAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const updated_transcription_text = formData.get("updated_completion") as string;
        try {
          const transcriptionStorage = await updateTranscriptionStorage(
            row.original.id,
              {title,updated_transcription_text },
          );
          if (transcriptionStorage.data.id) {
            toast.success("Transcription  updated");
            router.refresh();
            onCloseClick()
          }
        } catch (error: any) {
          console.error(error.message);
          toast.error("Fail to save, please try again");
        }
  };
  return (
      <form action={handleAction}>
          <div className="flex items-center justify-between mb-4">
              <DialogTitle className="font-semibold">Update Transcription</DialogTitle>
              <DialogClose
                  onClick={onCloseClick}
                  className={buttonVariants({variant: "ghost", size: "icon"})}
              >
                  <LuX/>{" "}
              </DialogClose>
          </div>
          <Label htmlFor="title" className="opacity-75">
              Title
          </Label>
          <Input
              id="title"
              name="title"
              defaultValue={row.original.title || ""}
              placeholder="No title"
              className="mb-4"
          />
          <div>Audio:</div>
          <audio controls className="w-full mb-4">
              <source src={row.getValue("audio_url")} type="audio/mpeg"/>
          </audio>
          <div className="text-sm mb-2 capitalize">Transcription</div>
          <Textarea
              autoFocus
              name="updated_completion"
              className="h-[30vh] lg:h-[35vh] resize-none mb-4"
              defaultValue={row.original.updated_transcription_text}
          />
          <div className="flex items-center justify-end">
              <Button type="submit">
                  <LuSave /> Save{" "}
              </Button>
          </div>
      </form>
  );
};

export default TranscriptionStorageUpdateForm;
