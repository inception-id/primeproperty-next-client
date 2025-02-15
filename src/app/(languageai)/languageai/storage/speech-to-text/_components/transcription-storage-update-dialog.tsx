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
import TranscriptionStorageUpdateForm
  from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-update-form";

type TTranscriptionStorageUpdateDialogProps = {
  row: Row<TSpeechToTextStorage>;
};
const TranscriptionStorageUpdateDialog = ({
  row,
}: TTranscriptionStorageUpdateDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false)
  // const onSaveClick = async () => {
  //   try {
  //     const transcriptionStorage = await updateTranscriptionStorage(
  //       row.original.id,
  //       value,
  //     );
  //     if (transcriptionStorage.data.id) {
  //       toast.success("Transcription  updated");
  //       router.refresh();
  //     } else {
  //       toast.error("Fail to save, please try again");
  //     }
  //   } catch (error: any) {
  //     console.error(error.message);
  //     toast.error("Fail to save, please try again");
  //   }
  // };
  return (
    <Dialog open={openDialog}>
      <DialogTrigger
          onClick={() => setOpenDialog(true)}
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <LuPen />
      </DialogTrigger>
      <DialogContent onOverlayClick={()=> setOpenDialog(false)} onEscapeKeyDown={()=> setOpenDialog(false)}>
        <TranscriptionStorageUpdateForm row={row} onCloseClick={()=> setOpenDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default TranscriptionStorageUpdateDialog;
