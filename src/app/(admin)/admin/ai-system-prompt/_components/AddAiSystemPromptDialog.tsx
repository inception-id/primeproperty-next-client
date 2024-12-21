"use client";
import { LuPlus, LuX } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAiSystemPromptStore } from "@/app/(admin)/admin/ai-system-prompt/_lib/store";
import { useShallow } from "zustand/react/shallow";

const AddAiSystemPromptDialog = () => {
  const { openAddDialog, updateStore } = useAiSystemPromptStore(
    useShallow((state) => ({
      openAddDialog: state.openAddDialog,
      updateStore: state.updateStore,
    })),
  );
  return (
    <Dialog open={openAddDialog}>
      <DialogTrigger
        className={cn(buttonVariants())}
        onClick={() => updateStore("openAddDialog", true)}
      >
        <LuPlus />
        System prompt
      </DialogTrigger>
      <DialogContent onOverlayClick={() => updateStore("openAddDialog", false)}>
        <div className="flex items-center justify-between">
          <DialogTitle className="font-semibold">
            Add new system prompt
          </DialogTitle>
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddAiSystemPromptDialog;
