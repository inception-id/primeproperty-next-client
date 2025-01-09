import { useContext, memo } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";

const TranslateCompletion = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);
  return (
    <div className="flex-1 text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto p-2">
      {completion || (
        <span className="opacity-50">
          {isLoading ? "Translating ..." : " Translation will show here"}
        </span>
      )}
    </div>
  );
};

export default memo(TranslateCompletion);
