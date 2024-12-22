"use client";
import { useShallow } from "zustand/react/shallow";
import { LuX } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAiSystemPromptStore } from "@/app/(admin)/admin/ai-system-prompt/_lib/store";
import UpdateAiSystemPromptForm from "@/app/(admin)/admin/ai-system-prompt/_components/UpdateAiSystemPromptForm";

const UpdateAiSystemPromptDialog = () => {
  const { openUpdateDialog, updateStore } = useAiSystemPromptStore(
    useShallow((state) => ({
      openUpdateDialog: state.openUpdateDialog,
      updateStore: state.updateStore,
    })),
  );
  return (
    <Dialog open={openUpdateDialog}>
      <DialogContent
        onOverlayClick={() => updateStore("openUpdateDialog", false)}
      >
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="font-semibold">
            Update system prompt
          </DialogTitle>
          <DialogClose onClick={() => updateStore("openUpdateDialog", false)}>
            <LuX />
          </DialogClose>
        </div>
        <UpdateAiSystemPromptForm />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateAiSystemPromptDialog;
