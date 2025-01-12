import { useContext, memo } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import {CheckbotContext} from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";

const CheckbotCompletion = () => {
    const { completion, isLoading } =
        useContext<UseCompletionHelpers>(CheckbotContext);
    return (
        <div className="flex-1 text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto p-2 whitespace-pre-line">
            {completion || (
                <span className="opacity-50">
          {isLoading ? "Checking..." : "Result will show here"}
        </span>
            )}
        </div>
    );
};

export default memo(CheckbotCompletion);
