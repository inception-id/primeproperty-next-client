import {findAllAiSystemPrompt} from "@/lib/api/ai-system-prompt/findAllAiSystemPrompt";
import AiSystemPromptsTable from "@/app/(admin)/admin/ai-system-prompt/_components/AiSystemPromptsTable";

const AiSystemPromptsTableWrapper = async () => {
    const aiSystemPrompts = await findAllAiSystemPrompt()
    if (!aiSystemPrompts.data || aiSystemPrompts.data.length === 0) {
        return "No data"
    }
    return <AiSystemPromptsTable data={aiSystemPrompts.data} />
};

export default AiSystemPromptsTableWrapper;