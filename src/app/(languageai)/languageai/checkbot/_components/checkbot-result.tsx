"use client";

import { useContext } from "react";
import { CheckbotContext } from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { LuCopy, LuGripHorizontal } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";

const CheckbotResult = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(CheckbotContext);
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="text-xs flex items-center gap-1 p-2 lg:hidden opacity-50">
        * Drag <LuGripHorizontal /> icon to resize
      </div>
      <div className="flex gap-2">
        <div className="flex-1 text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto p-2">
          {completion || (
            <span className="opacity-50">
              {isLoading ? "Translating ..." : " Translation will show here"}{" "}
            </span>
          )}
        </div>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={async () => await copyToClipboard(completion)}
        >
          <LuCopy />
        </Button>
      </div>
    </div>
  );
};

export default CheckbotResult;
