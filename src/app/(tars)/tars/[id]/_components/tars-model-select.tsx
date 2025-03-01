"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { findAllAiModels } from "@/lib/api/ai-models/find-all-ai-models";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

type TarsModelSelectProps = {
  className?: string;
  onValueChange: (value: string) => void;
};

const TarsModelSelect = ({
  className,
  onValueChange,
}: TarsModelSelectProps) => {
  const { data } = useQuery({
    queryKey: ["tars-model-select"],
    queryFn: async () => await findAllAiModels(),
  });

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder="Select AI model" />
      </SelectTrigger>
      <SelectContent>
        {data && data.data.length > 0 ? (
          data.data.map((model) => (
            <SelectItem key={model.value} value={String(model.id)}>
              {model.label}
            </SelectItem>
          ))
        ) : (
          <SelectItem value={String(0)} className="animate-pulse">
            Loading models...
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
};

export default TarsModelSelect;
