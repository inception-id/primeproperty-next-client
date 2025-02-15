"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LuPen } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";
import TranscriptionStorageUpdateForm from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-update-form";

type TTranscriptionStorageUpdateDialogProps = {
  row: Row<TSpeechToTextStorage>;
};
const TranscriptionStorageUpdateDialog = ({
  row,
}: TTranscriptionStorageUpdateDialogProps) => {
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
        <TranscriptionStorageUpdateForm
          row={row}
          onCloseClick={() => setOpenDialog(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default TranscriptionStorageUpdateDialog;
