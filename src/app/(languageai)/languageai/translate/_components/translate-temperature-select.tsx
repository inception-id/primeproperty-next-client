import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip } from "react-tooltip";

const TranslateTemperatureSelect = () => {
  return (
    <>
      <Select name="temperature" defaultValue="0.0">
        <SelectTrigger className="w-40" id="temperature">
          <SelectValue placeholder="Select Temperature" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0.0">Temperature: 0.0</SelectItem>
          <SelectItem value="0.5">Temperature: 0.5</SelectItem>
          <SelectItem value="1.0">Temperature: 1.0</SelectItem>
          <SelectItem value="1.5">Temperature: 1.5</SelectItem>
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#temperature" place="top">
        <div className="w-80">
          <p>Given a text and translated twice.</p>
          <p>Lower values will generate similar translation.</p>
          <p>Higher values will generate variety of the translation.</p>
        </div>
      </Tooltip>
    </>
  );
};

export default TranslateTemperatureSelect;
