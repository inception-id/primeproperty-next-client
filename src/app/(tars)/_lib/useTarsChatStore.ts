import { create } from "zustand";
import { TTarsChatMessage } from "../_server/create-tars-chat-room";

type TUseTarsChatStore = {
  messages: Pick<TTarsChatMessage, "role" | "content">[];
  updateStore: (key: keyof TUseTarsChatStore, value: any) => void;
  createUserAndAssistantMessages: (
    messages: Pick<TTarsChatMessage, "role" | "content">[],
  ) => void;
  updateAssistantMessageContent: (content: string) => void;
};

export const useTarsChatStore = create<TUseTarsChatStore>((set) => ({
  messages: [],
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  createUserAndAssistantMessages: (messages) =>
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
