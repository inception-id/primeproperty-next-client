import { memo, useEffect, useRef } from "react";
import { useCheckbotStore } from "../_lib/useCheckbotStore";
import { useShallow } from "zustand/react/shallow";

const CheckbotCompletion = () => {
  const completionEndRef = useRef<HTMLDivElement>(null);

  const { updatedCompletion } = useCheckbotStore(
    useShallow((state) => ({
      updatedCompletion: state.updatedCompletion,
    })),
  );

  useEffect(() => {
    if (updatedCompletion && completionEndRef.current) {
      console.log("here");
      completionEndRef.current.scrollTop =
        completionEndRef.current.scrollHeight;
    }
  }, [updatedCompletion]);

  return (
    <div
      className="text-sm overflow-y-auto p-2 whitespace-pre-line flex-1"
      ref={completionEndRef}
    >
      {updatedCompletion || (
        <span className="opacity-50">Result will show here</span>
      )}
    </div>
  );
};

export default memo(CheckbotCompletion);
