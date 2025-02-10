import { useContext, memo, useEffect, useRef } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { CheckbotContext } from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";

const CheckbotCompletion = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(CheckbotContext);
  const completionEndRef = useRef<any>(null);
  useEffect(() => {
    if (completionEndRef.current) {
      completionEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [completion]);
  return (
    <div className="flex-1 text-sm h-60 lg:h-[90vh] overflow-y-auto p-2 whitespace-pre-line">
      {completion || (
        <span className="opacity-50">
          {isLoading ? "Checking..." : "Result will show here"}
        </span>
      )}
      <div ref={completionEndRef} />
    </div>
  );
};

export default memo(CheckbotCompletion);
