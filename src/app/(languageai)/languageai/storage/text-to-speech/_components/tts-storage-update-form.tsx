import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuSave, LuX } from "react-icons/lu";
import { Textarea } from "@/components/ui/textarea";
import { Row } from "@tanstack/table-core";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import {updateTextToSpeechStorage} from "@/lib/api/text-to-speech/updat-tts-storage";

type TtsStorageUpdateFormProps = {
    row: Row<TTextToSpeechStorage>;
  onCloseClick: () => void;
};

const TtsStorageUpdateForm = ({
  onCloseClick,
  row,
}: TtsStorageUpdateFormProps) => {
  const router = useRouter();
  const handleAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    try {
      const ttsStorage = await updateTextToSpeechStorage(
        row.original.id,
        title,
      );
      if (ttsStorage.data.id) {
        toast.success("Tts  updated");
        router.refresh();
        onCloseClick();
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Fail to save, please try again");
    }
  };
  return (
    <form action={handleAction}>
      <div className="flex items-center justify-between mb-4">
        <DialogTitle className="font-semibold">
        Update Title
        </DialogTitle>
        <DialogClose
          onClick={onCloseClick}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <LuX />{" "}
        </DialogClose>
      </div>
      <Input
        id="title"
        name="title"
        defaultValue={row.original.title || ""}
        placeholder="No title"
        className="mb-4"
      />
      <div>Audio:</div>
      <audio controls className="w-full mb-4">
        <source src={row.getValue("audio_url")} type="audio/mpeg" />
      </audio>
      <div className="flex items-center justify-end">
        <Button type="submit">
          <LuSave /> Save{" "}
        </Button>
      </div>
    </form>
  );
};

export default TtsStorageUpdateForm;
