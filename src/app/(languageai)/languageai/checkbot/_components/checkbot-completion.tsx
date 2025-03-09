import { memo, useEffect, useRef } from "react";
import { useCheckbotStore } from "../_lib/useCheckbotStore";
import { useShallow } from "zustand/react/shallow";
import { Textarea } from "@/components/ui/textarea";

const CheckbotCompletion = () => {
  const completionEndRef = useRef<HTMLTextAreaElement>(null);

  const { updatedCompletion, updateStore, loadingText } = useCheckbotStore(
    useShallow((state) => ({
      updatedCompletion: state.updatedCompletion,
      updateStore: state.updateStore,
      loadingText: state.loadingText,
    })),
  );

  useEffect(() => {
    if (completionEndRef.current && updatedCompletion) {
      if (loadingText === "") {
        completionEndRef.current.scrollTop = 0;
      } else {
        completionEndRef.current.scrollTop =
          completionEndRef.current.scrollHeight;
      }
    }
  }, [updatedCompletion, loadingText]);

  return (
    <Textarea
      ref={completionEndRef}
      value={updatedCompletion}
      className="flex-1 text-sm overflow-y-auto border-none resize-none focus-visible:ring-transparent"
      onChange={(e) => updateStore("updatedCompletion", e.target.value)}
    />
  );
};

export default memo(CheckbotCompletion);
