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
      <SelectTrigger className="max-w-48 border-none ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select AI model" />
      </SelectTrigger>
      <SelectContent>
        {aiModels.data.map((model) => (
          <SelectItem key={model.value} value={String(model.id)}>
            {model.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TarsHeaderModelSelect;
