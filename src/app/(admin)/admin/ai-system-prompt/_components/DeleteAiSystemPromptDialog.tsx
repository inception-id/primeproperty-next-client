"use client";
import { LuTrash } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Row } from "@tanstack/table-core";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { deleteAiSystemPrompt } from "@/lib/api/ai-system-prompt/deleteAiSystemPrompt";

const DeleteAiSystemPromptDialog = ({ row }: { row: Row<TAiSystemPrompt> }) => {
  const router = useRouter();

  const onDeleteClick = async () => {
    try {
      const deletedPrompt = await deleteAiSystemPrompt(row.getValue("id"));
      toast(deletedPrompt.message);
      router.refresh();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "destructive", size: "icon" }))}
      >
        <LuTrash />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="font-semibold mb-4">
          Are you sure to delete ${row.getValue("name")} prompt?
        </DialogTitle>
        <div className="grid grid-cols-2 gap-8">
          <DialogClose
            className={buttonVariants({ variant: "destructive" })}
            onClick={onDeleteClick}
          >
            Delete
          </DialogClose>

          <DialogClose className={buttonVariants({ variant: "outline" })}>
            Cancel
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAiSystemPromptDialog;
