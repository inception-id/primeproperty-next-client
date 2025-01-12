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
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "react-toastify";
import { updateTranslationStorage } from "@/lib/api/translation/update-translation-storage";
import { useRouter } from "next/navigation";

type TTranslateStorageUpdateDialogProps = {
  row: Row<TTranslationStorage>;
};
const TranslateStorageUpdateDialog = ({
  row,
}: TTranslateStorageUpdateDialogProps) => {
  const router = useRouter();
  const [value, setValue] = useState(row.original.updated_completion);
  const onSaveClick = async () => {
    try {
      await updateTranslationStorage(row.original.id, value);
      toast.success("Translation updated");
      router.refresh();
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
            Update Translation
          </DialogTitle>
          <DialogClose
            className={buttonVariants({ variant: "outline", size: "icon" })}
          >
            <LuX />{" "}
          </DialogClose>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
          <div>
            <div className="text-sm mb-2">
              {row.original.content_language || "Detect Language"}
            </div>
            <div className="h-[30vh] lg:h-[40vh] text-sm">
              {row.original.content}
            </div>
          </div>
          <div>
            <div className="text-sm mb-2 capitalize">
              {row.original.target_language}
            </div>
            <Textarea
              autoFocus
              className="h-[30vh] lg:h-[40vh] resize-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <DialogClose className={buttonVariants()} onClick={onSaveClick}>
            <LuSave /> Save{" "}
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TranslateStorageUpdateDialog;
