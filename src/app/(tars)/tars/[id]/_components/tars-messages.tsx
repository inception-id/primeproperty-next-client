"use client";

import TarsHero from "../../_components/tars-hero";
import { useTarsChatStore } from "@/app/(tars)/_lib/useTarsChatStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TbCopy } from "react-icons/tb";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { cn } from "@/lib/utils";

const TarsMessages = () => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const { messages } = useTarsChatStore(
    useShallow((state) => ({
      messages: state.messages,
    })),
  );

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
      className="flex flex-col flex-1 overflow-y-auto max-h-[80vh] md:max-h-[85vh] gap-2 p-2"
      ref={messagesRef}
    >
      {messages.map((message, index) => {
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
              key={`${index}-${message.role}`}
              className="flex flex-col gap-1 px-2 py-1"
            >
              <div
                className={cn(
                  "whitespace-pre-line",
                  message.content === "Thinking..." && "animate-pulse",
                )}
              >
                {message.content}
              </div>
              <Button
                size="icon"
                variant="outline"
                onClick={async () => await copyToClipboard(message.content)}
              >
                <TbCopy />
              </Button>
            </div>
          );
        }

        return <> </>;
      })}
    </div>
  );
};

export default TarsMessages;
