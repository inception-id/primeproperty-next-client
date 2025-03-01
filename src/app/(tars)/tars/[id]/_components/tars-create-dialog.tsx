"use client";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { TbBallpen, TbX } from "react-icons/tb";
import TarsModelSelect from "./tars-model-select";
import { Label } from "@radix-ui/react-label";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { createTarsChatRoom } from "@/app/(tars)/_server/create-tars-chat-room";
import { toast } from "react-toastify";

const TarsCreateDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const handleValueChange = async (value: string) => {
    try {
      const newChat = await createTarsChatRoom({
        ai_model_id: Number(value),
        title: "",
      });
      if (newChat.status === 401) {
        updateLoginStore("openLoginDialog", true);
        setOpenDialog(false);
        return;
      }
      if (newChat.data.id) {
        queryClient.invalidateQueries({
          queryKey: ["tars-sidebar-chat-rooms"],
        });
        router.push(`/tars/${newChat.data.id}`);
      }
      setOpenDialog(false);
      return newChat;
    } catch (error) {
      console.error(error);
      toast.error("Fail to create chat");
    }
  };

  return (
    <Dialog open={openDialog}>
      <DialogTrigger
        onClick={() => setOpenDialog(true)}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "font-semibold",
        )}
      >
        <TbBallpen />
      </DialogTrigger>
      <DialogContent
        onOverlayClick={() => setOpenDialog(false)}
        onEscapeKeyDown={() => setOpenDialog(false)}
      >
        <div className="flex items-center justify-between mb-2">
          <DialogTitle>New Chat</DialogTitle>
          <DialogClose
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            onClick={() => setOpenDialog(false)}
          >
            <TbX />
          </DialogClose>
        </div>
        <div>
          <Label>Which model?</Label>
          <TarsModelSelect onValueChange={handleValueChange} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TarsCreateDialog;
