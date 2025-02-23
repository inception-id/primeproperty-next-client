"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuCircle, LuTrash, LuX } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "react-toastify";
import { deleteTranslationStorage } from "@/lib/api/translation/delete-translation-storage";
import { useRouter } from "next/navigation";

type TCheckbotStorageDeleteDialogProps = {
  checkbotId: number;
};

const CheckbotStorageDeleteDialog = ({
  checkbotId,
}: TCheckbotStorageDeleteDialogProps) => {
  const router = useRouter();

  const onDeleteClick = async () => {
    try {
      const storage = await deleteTranslationStorage(checkbotId);
      if (storage.data.id) {
        toast.success("Checkbot deleted");
        router.refresh();
      } else {
        toast.error("Delete failed, please try again");
      }
    } catch (e: any) {
      console.error(e.message);
      toast.error("Delete failed, please try again");
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <LuTrash />
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogTitle className="font-semibold">
          Delete from storage?
        </DialogTitle>
        <DialogDescription className="text-sm mb-4">
          This action can&apos;t be undone
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

export default CheckbotStorageDeleteDialog;
