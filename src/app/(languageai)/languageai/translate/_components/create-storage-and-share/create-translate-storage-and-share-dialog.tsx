import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LuX } from "react-icons/lu";
import { TbUserShare } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import CreateTranslateStorageAndShareForm from "./create-translate-storage-and-share-form";

type CreateTranslateStorageAndShareDialogProps = {
  translationId: number;
  updatedCompletion: string;
};

const CreateTranslateStorageAndShareDialog = ({
  translationId,
  updatedCompletion,
}: CreateTranslateStorageAndShareDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger
        data-tooltip-id="share-tooltip"
        data-tooltip-content="Share"
        data-tooltip-place="left"
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      >
        <>
          <Tooltip id="share-tooltip" />
          <TbUserShare />
        </>
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between">
          <DialogTitle>Save &amp; Share translation</DialogTitle>
          <DialogClose
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <LuX />
          </DialogClose>
        </div>
        <CreateTranslateStorageAndShareForm
          translationId={translationId}
          updatedCompletion={updatedCompletion}
        />
      </DialogContent>
    </Dialog>
  );
};
export default CreateTranslateStorageAndShareDialog;
