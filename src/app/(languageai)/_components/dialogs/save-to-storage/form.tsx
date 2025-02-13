import { useState } from "react";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LuX } from "react-icons/lu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LanguageAiSaveToStorageDialogProps } from "@/app/(languageai)/_components/dialogs/save-to-storage/index";

const LanguageAiSaveToStorageForm = ({
  label,
  onSaveClick,
}: LanguageAiSaveToStorageDialogProps) => {
  const [title, setTitle] = useState<string>("");
  return (
    <div>
      <div className="flex items-center justify-between ">
        <DialogTitle className="font-bold">Save to Storage</DialogTitle>
        <DialogClose
          className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
        >
          <LuX />
        </DialogClose>
      </div>

      <Label htmlFor="title">{label}</Label>
      <Input
        id="title"
        name="title"
        placeholder="Anything you want"
        className="mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex justify-end">
        <DialogClose
          className={cn(buttonVariants())}
          onClick={() => onSaveClick(title)}
        >
          Save
        </DialogClose>
      </div>
    </div>
  );
};

export default LanguageAiSaveToStorageForm;
