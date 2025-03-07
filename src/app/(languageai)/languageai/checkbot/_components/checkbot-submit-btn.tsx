import { Button } from "@/components/ui/button";
import { useShallow } from "zustand/react/shallow";
import { LuLoader } from "react-icons/lu";
import { useCheckbotStore } from "../_lib/useCheckbotStore";

const CheckbotSubmitBtn = () => {
  const { loadingText } = useCheckbotStore(
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
        "Check"
      )}
    </Button>
  );
};

export default CheckbotSubmitBtn;
