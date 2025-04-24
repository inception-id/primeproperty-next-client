"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Agent } from "@/lib/api/agents/type";
import { Row } from "@tanstack/react-table";

import { LuUserPen } from "react-icons/lu";
import { EditForm } from "./edit-form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type EditDialogProps = {
  row: Row<Agent>;
};

export const EditDialog = ({ row }: EditDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open}>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        onClick={() => setOpen(true)}
      >
        <LuUserPen />
      </DialogTrigger>
      <DialogContent
        className="flex flex-col gap-4"
        onOverlayClick={() => setOpen(false)}
        onEscapeKeyDown={() => setOpen(false)}
      >
        <DialogTitle className="font-bold text-center">
          {row.original.email}
        </DialogTitle>
        <EditForm row={row} closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
