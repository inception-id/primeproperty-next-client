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
  const {
    aiModel,
    messages,
    updateStore,
    updateAssistantMessageContent,
    prompt,
  } = useTarsChatStore(
    useShallow((state) => ({
      aiModel: state.aiModel,
      updateStore: state.updateStore,
      messages: state.messages,
      updateAssistantMessageContent: state.updateAssistantMessageContent,
      prompt: state.prompt,
    })),
  );
  const handleAction = async (formData: FormData) => {
    const formPrompt = formData.get("prompt") as string;
    updateStore("prompt", "");
    try {
      const newChatPayload = {
        role: "user",
        content: formPrompt,
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
      let input_tokens = 0;
      let output_tokens = 0;
      let total_tokens = 0;
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            const newAssistantChatPayload = {
              role: "assistant",
              content,
              tars_chat_room_id: Number(params.id),
              input_tokens,
              output_tokens,
              total_tokens,
            };
            await createTarsChatMessage(newAssistantChatPayload);
            break;
          }

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
              if (chunk.usage) {
                input_tokens = chunk.usage.prompt_tokens;
                output_tokens = chunk.usage.completion_tokens;
                total_tokens = chunk.usage.total_tokens;
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
        value={prompt}
        onChange={(e) => updateStore("prompt", e.target.value)}
      />
      <Button type="submit" size="icon" className="rounded-full">
        <TbArrowUp />
      </Button>
    </form>
  );
};

export default TarsForm;
