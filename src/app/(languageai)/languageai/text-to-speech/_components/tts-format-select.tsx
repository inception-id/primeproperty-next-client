import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TtsFormatSelect = () => {
  return (
    <Select name="response_format" defaultValue="mp3">
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Format" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mp3">Format: MP3</SelectItem>
        <SelectItem value="wav">Format: WAV</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TtsFormatSelect;
