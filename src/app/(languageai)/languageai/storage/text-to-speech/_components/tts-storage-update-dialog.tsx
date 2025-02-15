"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuPen } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import { buttonVariants } from "@/components/ui/button";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import {useState} from "react";
import TtsStorageUpdateForm
    from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-update-form";

type TTtsStorageUpdateDialogProps = {
  row: Row<TTextToSpeechStorage>;
};
const TtsStorageUpdateDialog = ({
  row,
}: TTtsStorageUpdateDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog}>
      <DialogTrigger
        onClick={() => setOpenDialog(true)}
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <LuPen />
      </DialogTrigger>
      <DialogContent
        onOverlayClick={() => setOpenDialog(false)}
        onEscapeKeyDown={() => setOpenDialog(false)}
      >
          <TtsStorageUpdateForm row={row} onCloseClick={(() => setOpenDialog(false))} />
      </DialogContent>
    </Dialog>
  );
};

export default TtsStorageUpdateDialog;
