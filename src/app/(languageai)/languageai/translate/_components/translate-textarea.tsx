import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import { useTranslateStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";

const TranslateTextarea = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);
  const { updateStore, updatedCompletion } = useTranslateStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
      updatedCompletion: state.updatedCompletion,
    })),
  );
  return (
    <Textarea
      className="text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto border-none resize-none"
      value={updatedCompletion || completion}
      disabled={!updatedCompletion}
      placeholder={isLoading ? "Translating..." : "Translation will show here"}
      onChange={(e) => updateStore("updatedCompletion", e.target.value)}
    />
  );
};

export default TranslateTextarea;
