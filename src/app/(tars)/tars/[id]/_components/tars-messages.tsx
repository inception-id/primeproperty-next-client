"use client";

import { TTarsChatMessage } from "@/app/(tars)/_server/create-tars-chat-room";
import TarsHero from "./tars-hero";
import { useTarsChatStore } from "@/app/(tars)/_lib/useTarsChatStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect, useRef } from "react";

type TarsMessagesProps = {
  defaultMessages: TTarsChatMessage[] | null;
};

const TarsMessages = ({ defaultMessages }: TarsMessagesProps) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const { messages, updateStore } = useTarsChatStore(
    useShallow((state) => ({
      messages: state.messages,
      updateStore: state.updateStore,
    })),
  );

  useEffect(() => {
    if (defaultMessages && defaultMessages?.length > 0) {
      updateStore("messages", defaultMessages);
    }
  }, [defaultMessages, updateStore]);

  useEffect(() => {
    if (messages.length > 0 && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  if (!messages || messages.length === 0) {
    return <TarsHero />;
  }

  return (
    <div
      className="flex flex-col flex-1 overflow-y-auto p-2 max-h-[80vh] md:max-h-[85vh] gap-2"
      ref={messagesRef}
    >
      {messages.map((message, index) => {
        if (message.role === "system") {
          return <></>;
        }

        if (message.role === "user") {
          return (
            <div
              className="max-w-[75%] text-right ml-auto px-2 py-1 rounded bg-accent whitespace-pre-line"
              key={`${index}-${message.role}`}
            >
              {message.content}
            </div>
          );
        }

        if (message.role === "assistant") {
          return (
            <div
              className="px-2 py-1 whitespace-pre-line"
              key={`${index}-${message.role}`}
            >
              {message.content}
            </div>
          );
        }
      })}
    </div>
  );
};

export default TarsMessages;
