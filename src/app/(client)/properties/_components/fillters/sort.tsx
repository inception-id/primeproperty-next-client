import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterSortProps = {
  defaultValue?: string;
  onValueChange: (value: string) => void;
};

export const FilterSort = ({
  defaultValue,
  onValueChange,
}: FilterSortProps) => {
  return (
    <div>
      <Label>Urutkan</Label>
      <Select
        name="order_by"
        defaultValue={defaultValue ?? "Newest"}
        onValueChange={onValueChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Terbaru" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Newest">Terbaru</SelectItem>
          <SelectItem value="LowestPrice">Harga Terendah</SelectItem>
          <SelectItem value="HighestPrice">Harga Tertinggi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
