"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuCircle, LuUserX, LuX } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteTranslationSharedStorage } from "@/lib/api/translation/delete-translation-shared-storage";

type RemoveSharedTranslateStorageAccessDialogProps = {
  sharedTranslationStorageTitle: string | null;
  sharedTranslationStorageId: number;
};

const RemoveSharedTranslateStorageAccessDialog = ({
  sharedTranslationStorageTitle,
  sharedTranslationStorageId,
}: RemoveSharedTranslateStorageAccessDialogProps) => {
  const router = useRouter();
  const onDeleteClick = async () => {
    try {
      const translationStorage = await deleteTranslationSharedStorage(
        sharedTranslationStorageId,
      );
      console.log(translationStorage);
      if (translationStorage.data.id) {
        toast.success(`Removed successfully`);
        router.refresh();
      }
    } catch (e: any) {
      console.error(e.message);
      toast.error("Remove failed, please try again");
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <LuUserX />
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogTitle className="font-semibold">
          Are you sure to remove &quot;
          {sharedTranslationStorageTitle || "No title"}&quot; translation from
          you shared storage?
        </DialogTitle>
        <DialogDescription className="text-sm mb-4">
          (this will not remove other user&apos;s access)
        </DialogDescription>
        <div className="grid grid-cols-2 gap-8">
          <DialogClose
            className={buttonVariants({ variant: "destructive" })}
            onClick={onDeleteClick}
          >
            <LuCircle />
            Yes
          </DialogClose>
          <DialogClose className={buttonVariants({ variant: "outline" })}>
            <LuX /> No
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveSharedTranslateStorageAccessDialog;
