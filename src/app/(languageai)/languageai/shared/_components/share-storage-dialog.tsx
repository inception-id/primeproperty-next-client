import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuX } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { TbUserShare } from "react-icons/tb";

type ShareStorageDialogProps = {
  children: React.ReactNode;
};

const ShareStorageDialog = ({ children }: ShareStorageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
      >
        <TbUserShare />
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between mb-4">
          <DialogTitle>Share</DialogTitle>
          <DialogClose
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <LuX />
          </DialogClose>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ShareStorageDialog;
