import {useContext, memo, useRef, useEffect} from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";

const TranslateCompletion = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);
  const completionEndRef= useRef<any>(null);

  useEffect(() => {
    if (completionEndRef.current) {
      completionEndRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [completion]);
  return (
    <div className="flex-1 text-sm h-[90vh] overflow-y-auto p-2 whitespace-pre-line">
      {completion || (
        <span className="opacity-50">
          {isLoading ? "Translating ..." : " Translation will show here"}
        </span>
      )}
      <div ref={completionEndRef} />
    </div>
  );
};

export default memo(TranslateCompletion);
