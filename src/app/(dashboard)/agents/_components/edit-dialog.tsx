"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Agent } from "@/lib/api/agents/type";
import { Row } from "@tanstack/react-table";

import { LuUserPen } from "react-icons/lu";
import { EditForm } from "./edit-form";
import { useState } from "react";

type EditDialogProps = {
  row: Row<Agent>;
};

export const EditDialog = ({ row }: EditDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => setOpen(true)}>
        <LuUserPen />
      </DialogTrigger>
      <DialogContent
        className="flex flex-col gap-4"
        onOverlayClick={() => setOpen(false)}
        onEscapeKeyDown={() => setOpen(false)}
      >
        <div>
          <DialogTitle className="font-bold text-center">
            Edit Agent
          </DialogTitle>
          <DialogDescription className="text-center">
            {row.original.email}
          </DialogDescription>
        </div>
        <EditForm row={row} closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
