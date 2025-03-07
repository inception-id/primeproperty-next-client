import { Button } from "@/components/ui/button";
import { useTranslationStore } from "../_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";
import { LuLoader } from "react-icons/lu";

const TranslateSubmitBtn = () => {
  const { loadingText } = useTranslationStore(
    useShallow((state) => ({
      loadingText: state.loadingText,
    })),
  );

  return (
    <Button type="submit" className="ml-auto" disabled={loadingText !== ""}>
      {loadingText ? (
        <div className="flex gap-2 items-center">
          <LuLoader className="animate-spin" />
          {loadingText}
        </div>
      ) : (
        "Translate"
      )}
    </Button>
  );
};

export default TranslateSubmitBtn;
