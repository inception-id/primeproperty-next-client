import { memo, useRef, useEffect } from "react";
import { useTranslationStore } from "../_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";
import { Textarea } from "@/components/ui/textarea";

const TranslateCompletion = () => {
  const completionRef = useRef<HTMLTextAreaElement>(null);
  const { updatedCompletion, loadingText, updateStore } = useTranslationStore(
    useShallow((state) => ({
      updatedCompletion: state.updatedCompletion,
      updateStore: state.updateStore,
      loadingText: state.loadingText,
    })),
  );
  useEffect(() => {
    if (completionRef.current && updatedCompletion) {
      if (loadingText === "") {
        completionRef.current.scrollTop = 0;
      } else {
        completionRef.current.scrollTop = completionRef.current.scrollHeight;
      }
    }
  }, [loadingText, updatedCompletion]);

  return (
    <Textarea
      ref={completionRef}
      value={updatedCompletion}
      className="flex-1 text-sm overflow-y-auto border-none resize-none focus-visible:ring-transparent"
      onChange={(e) => updateStore("updatedCompletion", e.target.value)}
    />
  );
};

export default memo(TranslateCompletion);
