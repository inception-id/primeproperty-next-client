import { create } from "zustand";
import { TTarsChatMessage } from "../_server/create-tars-chat-room";
import { TAiModel } from "@/lib/api/ai-models/find-all-ai-models";

type TUseTarsChatStore = {
  aiModel: TAiModel | null;
  prompt: string;
  messages: Pick<TTarsChatMessage, "role" | "content">[];
  updateStore: (key: keyof TUseTarsChatStore, value: any) => void;
  addUserAndAssistantMessages: (
    messages: Pick<TTarsChatMessage, "role" | "content">[],
  ) => void;
  updateAssistantMessageContent: (content: string) => void;
};

export const useTarsChatStore = create<TUseTarsChatStore>((set) => ({
  aiModel: null,
  prompt: "",
  messages: [],
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  addUserAndAssistantMessages: (messages) =>
    set((state) => ({
      ...state,
      messages: [...state.messages, ...messages],
    })),
  updateAssistantMessageContent: (content) =>
    set((state) => {
      const newMessages = structuredClone(state.messages);
      newMessages[newMessages.length - 1] = {
        ...newMessages[newMessages.length - 1],
        content,
      };

      return {
        ...state,
        messages: newMessages,
      };
    }),
}));
