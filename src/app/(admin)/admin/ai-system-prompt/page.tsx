import {Suspense} from "react";
import AddAiSystemPromptDialog from "@/app/(admin)/admin/ai-system-prompt/_components/AddAiSystemPromptDialog";
import AiSystemPromptsTableWrapper from "@/app/(admin)/admin/ai-system-prompt/_components/AiSystemPromptsTableWrapper";

const AiSystemPromptAdmin = () => {
  return (
    <section className="p-4 w-full">
      <AddAiSystemPromptDialog />
        <Suspense>
           <AiSystemPromptsTableWrapper />
        </Suspense>
    </section>
  );
};

export default AiSystemPromptAdmin;
