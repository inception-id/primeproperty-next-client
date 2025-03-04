"use client";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useTarsChatStore } from "@/app/(tars)/_lib/useTarsChatStore";
import { createTarsChatMessage } from "@/app/(tars)/_server/create-tars-chat-message";
import { TOpenAiCompletionChunk } from "@/app/api/openai/route";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { TbArrowUp } from "react-icons/tb";
import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";

const TarsForm = () => {
  const params = useParams();
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );
  const { aiModel, messages, updateStore, updateAssistantMessageContent } =
    useTarsChatStore(
      useShallow((state) => ({
        aiModel: state.aiModel,
        updateStore: state.updateStore,
        messages: state.messages,
        updateAssistantMessageContent: state.updateAssistantMessageContent,
      })),
    );
  const handleAction = async (formData: FormData) => {
    const prompt = formData.get("prompt") as string;
    try {
      const newChatPayload = {
        role: "user",
        content: prompt,
        tars_chat_room_id: Number(params.id),
      };
      const newChat = await createTarsChatMessage(newChatPayload);
      if (newChat.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }
      const newMessages = [...messages, newChatPayload];
      updateStore("messages", [
        ...newMessages,
        { role: "assistant", content: "Thinking..." },
      ]);
      const response = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({ messages: newMessages }),
      });
      let content = "";
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const lines = decoder.decode(value).trim().split("\n");
          lines.forEach((line) => {
            if (line) {
              const chunk: TOpenAiCompletionChunk = JSON.parse(line);
              if (
                chunk.choices.length > 0 &&
                chunk.choices[0]?.delta?.content
              ) {
                content += chunk.choices[0].delta.content;
                updateAssistantMessageContent(content);
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
      className="flex items-center border rounded-full shadow p-1"
      action={handleAction}
    >
      <Input
        type="text"
        name="prompt"
        className="border-none ring-offset-transparent focus-visible:ring-transparent rounded-l-full"
        placeholder={
          aiModel ? `Ask ${aiModel.label} anything` : "Ask TARS anything"
        }
      />
      <Button type="submit" size="icon" className="rounded-full">
        <TbArrowUp />
      </Button>
    </form>
  );
};

export default TarsForm;
