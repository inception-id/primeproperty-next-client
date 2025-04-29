import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SoldStatusSelectProps = {
  defaultValue?: string;
};

export const SoldStatusSelect = ({ defaultValue }: SoldStatusSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="sold_status">Sold/Available</Label>
      <Select name="sold_status" defaultValue={defaultValue ?? "Available"}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Sold/Available" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Available" className="capitalize">
            Available
          </SelectItem>
          <SelectItem value="Sold" className="capitalize">
            Sold
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
