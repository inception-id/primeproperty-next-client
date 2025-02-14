"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuPen } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import TranslateStorageUpdateForm
  from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-form";

type TTranslateStorageUpdateDialogProps = {
  row: Row<TTranslationStorage>;
};
const TranslateStorageUpdateDialog = ({
  row,
}: TTranslateStorageUpdateDialogProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  return (
    <Dialog open={openDialog}>
      <DialogTrigger
          onClick={() => setOpenDialog(true)}
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <LuPen />
      </DialogTrigger>
      <DialogContent onOverlayClick={()=> setOpenDialog(false)} onEscapeKeyDown={()=> setOpenDialog(false)}>
        <TranslateStorageUpdateForm onCloseClick={() => setOpenDialog(false)}  row={row} />
      </DialogContent>
    </Dialog>
  );
};

export default TranslateStorageUpdateDialog;
