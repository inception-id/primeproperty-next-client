import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LuSave } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LanguageAiSaveToStorageForm from "@/app/(languageai)/_components/dialogs/save-to-storage/form";
import {Tooltip} from "react-tooltip";

export type LanguageAiSaveToStorageDialogProps = {
  label: string;
  onSaveClick: (title: string) => void;
};

const LanguageAiSaveToStorageDialog = (
  props: LanguageAiSaveToStorageDialogProps,
) => {
  return (
    <Dialog>
      <DialogTrigger
          data-tooltip-id="save-tooltip"
          data-tooltip-content="Save"
          data-tooltip-place="left"
        className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
      >
          <>
              <Tooltip id="save-tooltip" />
        <LuSave />
          </>
      </DialogTrigger>
      <DialogContent>
        <LanguageAiSaveToStorageForm {...props} />
      </DialogContent>
    </Dialog>
  );
};

export default LanguageAiSaveToStorageDialog;
