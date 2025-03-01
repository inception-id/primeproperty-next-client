"use client";
import { toast } from "react-toastify";
import TarsCreateDialog from "../_components/tars-create-dialog";
import TarsHeaderModelSelect from "../_components/tars-model-select";
import TarsHeaderSheet from "./tars-header-sheet";
import { createTarsChatRoom } from "@/app/(tars)/_server/create-tars-chat-room";
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { useQueryClient } from "@tanstack/react-query";

const TarsHeader = () => {
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
        return;
      }
      if (newChat.data.id) {
        queryClient.invalidateQueries({
          queryKey: ["tars-sidebar-chat-rooms"],
        });
        router.push(`/tars/${newChat.data.id}`);
      }
      return newChat;
    } catch (error) {
      console.error(error);
      toast.error("Fail to create chat");
    }
  };
  return (
    <div className="flex items-center justify-between">
      <TarsHeaderSheet />
      <TarsHeaderModelSelect
        onValueChange={handleValueChange}
        className="max-w-48 border-none ring-offset-transparent focus:ring-transparent"
      />
      <h1 className="hidden md:block px-2 font-semibold">TARS</h1>
      <span className="md:hidden">
        <TarsCreateDialog />
      </span>
    </div>
  );
};

export default TarsHeader;
