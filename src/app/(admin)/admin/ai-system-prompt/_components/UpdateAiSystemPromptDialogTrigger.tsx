import { LuPen } from "react-icons/lu";
import { useShallow } from "zustand/react/shallow";
import { Button } from "@/components/ui/button";
import { useAiSystemPromptStore } from "@/app/(admin)/admin/ai-system-prompt/_lib/store";
import { Row } from "@tanstack/table-core";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";

const UpdateAiSystemPromptDialogTrigger = ({
  row,
}: {
  row: Row<TAiSystemPrompt>;
}) => {
  const { updateStore } = useAiSystemPromptStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );
  return (
    <Button
      size="icon"
      onClick={() => {
        updateStore("updateTarget", row.original);
        updateStore("openUpdateDialog", true);
      }}
    >
      <LuPen />
    </Button>
  );
};

export default UpdateAiSystemPromptDialogTrigger;
