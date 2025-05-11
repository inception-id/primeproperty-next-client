import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FilterSort = () => {
  return (
    <div>
      <Label>Urutkan</Label>
      <Select name="order_by">
        <SelectTrigger>
          <SelectValue placeholder="Rekomendasi" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recommended">Rekomendasi</SelectItem>
          <SelectItem value="lowest_price">Harga Terendah</SelectItem>
          <SelectItem value="highest_price">Harga Tertinggi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
