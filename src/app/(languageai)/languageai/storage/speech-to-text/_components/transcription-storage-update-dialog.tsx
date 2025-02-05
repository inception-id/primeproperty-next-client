"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuPen, LuSave, LuX } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import { buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";
import { updateTranscriptionStorage } from "@/lib/api/speech-to-text/update-transcription-storage";

type TTranscriptionStorageUpdateDialogProps = {
  row: Row<TSpeechToTextStorage>;
};
const TranscriptionStorageUpdateDialog = ({
  row,
}: TTranscriptionStorageUpdateDialogProps) => {
  const router = useRouter();
  const [value, setValue] = useState(row.original.updated_transcription_text);
  const onSaveClick = async () => {
    try {
      const transcriptionStorage = await updateTranscriptionStorage(
        row.original.id,
        value,
      );
      if (transcriptionStorage.data.id) {
        toast.success("Transcription  updated");
        router.refresh();
      } else {
        toast.error("Fail to save, please try again");
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Fail to save, please try again");
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <LuPen />
      </DialogTrigger>
      <DialogContent className="lg:max-w-5xl">
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="font-semibold">
            Update Transcription
          </DialogTitle>
          <DialogClose
            className={buttonVariants({ variant: "outline", size: "icon" })}
          >
            <LuX />{" "}
          </DialogClose>
        </div>
        <div>Audio: </div>
        <audio controls className="w-full mb-4">
          <source src={row.getValue("audio_url")} type="audio/mpeg" />
        </audio>
        <div className="text-sm mb-2 capitalize">Transcription</div>
        <Textarea
          autoFocus
          className="h-[30vh] lg:h-[35vh] resize-none mb-4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center justify-end">
          <DialogClose className={buttonVariants()} onClick={onSaveClick}>
            <LuSave /> Save{" "}
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TranscriptionStorageUpdateDialog;
