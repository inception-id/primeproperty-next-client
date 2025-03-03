"use client";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { createTarsChatMessage } from "@/app/(tars)/_server/create-tars-chat-message";
import { createTarsChatRoom } from "@/app/(tars)/_server/create-tars-chat-room";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";
import { TbArrowUp } from "react-icons/tb";
import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";

const TarsForm = () => {
  const params = useParams();
  const router = useRouter();
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );
  const handleAction = async (formData: FormData) => {
    const prompt = formData.get("prompt") as string;
    try {
      let roomId = params?.id ? Number(params.id) : 0;
      if (!roomId) {
        const createRoomPayload = {
          room: {
            ai_model_id: 1,
            title: "",
          },
          messages: [
            {
              role: "System",
              content: "You are a helpful assistant.",
            },
          ],
        };
        const newRoom = await createTarsChatRoom(createRoomPayload);
        if (newRoom.status === 401) {
          updateLoginStore("openLoginDialog", true);
          return;
        }
        roomId = newRoom.data.id;
        router.push(`/tars/${newRoom.data.id}`);
      }
      const payload = {
        role: "User",
        content: prompt,
        tars_chat_room_id: roomId,
      };
      const newChat = await createTarsChatMessage(payload);
      if (newChat.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }
      return;
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message, please try again later.");
    }
  };
  return (
    <form
      className="flex items-center border rounded-full shadow p-1"
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

export default TarsForm;
