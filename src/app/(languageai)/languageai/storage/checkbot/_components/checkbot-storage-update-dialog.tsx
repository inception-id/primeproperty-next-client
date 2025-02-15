"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuPen } from "react-icons/lu";
import { Row } from "@tanstack/table-core";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import CheckbotStorageUpdateForm
  from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-update-form";

type TCheckbotStorageUpdateDialogProps = {
  row: Row<TCheckbotStorage>;
};
const CheckbotStorageUpdateDialog = ({
  row,
}: TCheckbotStorageUpdateDialogProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Dialog open={openDialog}>
      <DialogTrigger
          onClick={()=> setOpenDialog(true)}
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <LuPen />
      </DialogTrigger>
      <DialogContent onOverlayClick={() => setOpenDialog(false)} onEscapeKeyDown={() => setOpenDialog(false)} >
        <CheckbotStorageUpdateForm row={row} onCloseClick={()=> setOpenDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default CheckbotStorageUpdateDialog;
