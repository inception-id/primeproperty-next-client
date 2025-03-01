import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { findAllAiModels } from "@/lib/api/ai-models/find-all-ai-models";

const TarsHeaderModelSelect = async () => {
  const aiModels = await findAllAiModels();
  return (
    <Select>
      <SelectTrigger className="max-w-36 border-none ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="gpt-4o-mini" />
      </SelectTrigger>
      <SelectContent>
        {aiModels.data.map((model) => (
          <SelectItem key={model.value} value={model.value}>
            {model.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TarsHeaderModelSelect;
