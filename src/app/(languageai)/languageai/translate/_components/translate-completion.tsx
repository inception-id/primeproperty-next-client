import { memo, useRef, useEffect } from "react";
import { useTranslationStore } from "../_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";

const TranslateCompletion = () => {
  const completionRef = useRef<HTMLDivElement>(null);
  const { updatedCompletion } = useTranslationStore(
    useShallow((state) => ({
      updatedCompletion: state.updatedCompletion,
    })),
  );
  useEffect(() => {
    if (updatedCompletion && completionRef.current) {
      completionRef.current.scrollTop = completionRef.current.scrollHeight;
    }
  }, [updatedCompletion]);

  return (
    <div
      className="text-sm overflow-y-auto p-2 whitespace-pre-line flex-1"
      ref={completionRef}
    >
      {updatedCompletion || (
        <span className="opacity-50">Translation will show here</span>
      )}
    </div>
  );
};

export default memo(TranslateCompletion);
