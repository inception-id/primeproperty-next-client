"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LuPen } from "react-icons/lu";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import TranslateStorageUpdateForm from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-update-form";

export type TTranslateStorageUpdateDialogProps = Omit<
  TTranslationStorage,
  "user_id" | "translation_id" | "created_at" | "updated_at"
>;
const TranslateStorageUpdateDialog = ({
  id,
  title,
  content_language,
  content,
  target_language,
  updated_completion,
}: TTranslateStorageUpdateDialogProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
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
        <TranslateStorageUpdateForm
          id={id}
          title={title}
          content_language={content_language}
          content={content}
          target_language={target_language}
          updated_completion={updated_completion}
          onCloseClick={() => setOpenDialog(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default TranslateStorageUpdateDialog;
