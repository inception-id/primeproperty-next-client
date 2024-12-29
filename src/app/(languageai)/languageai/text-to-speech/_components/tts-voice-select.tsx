import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TtsVoiceSelect = () => {
  return (
    <Select name="voice">
      <SelectTrigger className="max-w-48">
        <SelectValue placeholder="Select Voice" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="alloy">Voice: Alloy</SelectItem>
        <SelectItem value="echo">Voice: Echo</SelectItem>
        <SelectItem value="fable">Voice: Fable</SelectItem>
        <SelectItem value="onyx">Voice: Onyx</SelectItem>
        <SelectItem value="nova">Voice: Nova</SelectItem>
        <SelectItem value="shimmer">Voice: Shimmer</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TtsVoiceSelect;
