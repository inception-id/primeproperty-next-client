import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {findAllAiSystemPrompt} from "@/lib/api/ai-system-prompt/findAllAiSystemPrompt";

const CheckbotInstructionSelection  = () => {
  const { data } = useQuery({
    queryKey: ["checkbotInstructionSelection"],
    queryFn: async () => {
      try {
        const instructions = await findAllAiSystemPrompt('checkbot');
        return instructions.data;
      } catch (e: any) {
        console.error(e);
        return [];
      }
    },
  });

  return (
      <div className="p-2">

      <Select name="ai_system_prompt">
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Select instruction" />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data?.length > 0 &&
            data?.map((instruction) => (
              <SelectItem
                value={instruction.prompt}
                key={`detect_${instruction.id}`}
                className="capitalize"
              >
                {instruction.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      </div>
  );
};

export default  CheckbotInstructionSelection;
