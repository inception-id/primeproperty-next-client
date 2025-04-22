"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteAgent } from "@/lib/api/agents/delete-agent";
import { Agent } from "@/lib/api/agents/type";
import { deleteSupertokensUser } from "@/lib/supertokens/delete-supertokens-user";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { Row } from "@tanstack/react-table";

import { LuUserX } from "react-icons/lu";
import { toast } from "react-toastify";

type DeleteDialogProps = {
  row: Row<Agent>;
};

export const DeleteDialog = ({ row }: DeleteDialogProps) => {
  const query = useQueryClient();
  const onDeleteClick = async () => {
    try {
      Promise.all([
        await deleteSupertokensUser(row.original.supertokens_user_id),
        await deleteAgent(row.original.id),
      ]);

      query.invalidateQueries({ queryKey: ["agents"] });
      toast.success("Agent deleted successfully");
      return;
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete agent, please try again later");
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      >
        <LuUserX />
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4">
        <div>
          <DialogTitle className="font-bold ">Delete Agent</DialogTitle>
          <DialogDescription>
            Do you want to delete {row.original.email}?
          </DialogDescription>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
            Eh salah klik
          </DialogClose>
          <DialogClose
            className={cn(buttonVariants({ variant: "destructive" }))}
            onClick={onDeleteClick}
          >
            Yes, delete
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
