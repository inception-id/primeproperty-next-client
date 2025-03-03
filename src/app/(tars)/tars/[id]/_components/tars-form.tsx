"use client";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useTarsChatStore } from "@/app/(tars)/_lib/useTarsChatStore";
import { createTarsChatMessage } from "@/app/(tars)/_server/create-tars-chat-message";
import { createTarsChatRoom } from "@/app/(tars)/_server/create-tars-chat-room";
import { TOpenAiCompletionChunk } from "@/app/api/openai/route";
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
  const {
    messages,
    createUserAndAssistantMessages,
    updateAssistantMessageContent,
  } = useTarsChatStore(
    useShallow((state) => ({
      messages: state.messages,
      createUserAndAssistantMessages: state.createUserAndAssistantMessages,
      updateAssistantMessageContent: state.updateAssistantMessageContent,
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
              role: "system",
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
        role: "user",
        content: prompt,
        tars_chat_room_id: roomId,
      };
      const newChat = await createTarsChatMessage(payload);
      if (newChat.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      const userAndAssistantMessages = [
        { role: "user", content: prompt },
        { role: "assistant", content: "Thinking..." },
      ];
      createUserAndAssistantMessages(userAndAssistantMessages);

      const newMessages = [...messages, userAndAssistantMessages[0]];
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      let assistantContent = "";
      let inputTokens = 0;
      let outputTokens = 0;
      let totalTokens = 0;
      if (response && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            const payload = {
              role: "assistant",
              content: assistantContent,
              tars_chat_room_id: roomId,
              input_tokens: inputTokens,
              output_tokens: outputTokens,
              total_tokens: totalTokens,
            };
            await createTarsChatMessage(payload);
            break;
          }

          const lines = decoder.decode(value).trim().split("\n");
          lines.forEach((line) => {
            if (line) {
              const chunk: TOpenAiCompletionChunk = JSON.parse(line);
              if (
                chunk.choices.length > 0 &&
                chunk.choices[0] &&
                chunk.choices[0].delta.content
              ) {
                assistantContent += chunk.choices[0].delta.content;
                updateAssistantMessageContent(assistantContent);
              }
              if (chunk.usage) {
                inputTokens = chunk.usage.prompt_tokens;
                outputTokens = chunk.usage.completion_tokens;
                totalTokens = chunk.usage.total_tokens;
              }
            }
          });
        }
      }
      return;
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message, please try again later.");
    }
  };
  return (
    <form
      className="flex items-center border rounded-full shadow p-1 mb-2"
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
