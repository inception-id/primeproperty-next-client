"use client";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { createTarsChatRoom } from "@/app/(tars)/_server/create-tars-chat-room";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { TbArrowUp } from "react-icons/tb";
import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";
import { useTarsChatStore } from "../../_lib/useTarsChatStore";

const TarsHomeForm = () => {
  const router = useRouter();
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );
  const { updateStore } = useTarsChatStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const prompt = formData.get("prompt") as string;
    try {
      const createRoomPayload = {
        ai_model_id: 1,
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      };
      const newRoom = await createTarsChatRoom(createRoomPayload);
      if (newRoom.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }
      updateStore("messages", [
        ...createRoomPayload.messages,
        { role: "assistant", content: "Thinking..." },
      ]);
      router.push(`/tars/${newRoom.data.id}`);
      return;
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message, please try again later.");
    }
  };
  return (
    <form
      className="flex items-center border rounded-full shadow p-1 w-full md:max-w-5xl"
      action={handleAction}
    >
      <Input
        type="text"
        name="prompt"
        className="border-none ring-offset-transparent focus-visible:ring-transparent rounded-l-full"
        placeholder="Ask TARS anything"
      />
      <Button type="submit" size="icon" className="rounded-full">
        <TbArrowUp />
      </Button>
    </form>
  );
};

export default TarsHomeForm;
