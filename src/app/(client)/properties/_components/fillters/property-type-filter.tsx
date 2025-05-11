import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUILDING_TYPES } from "@/lib/enums/building-type";

type PropertyTypeFilterProps = {
  defaultValue?: string;
};

export const PropertyTypeFilter = ({
  defaultValue,
}: PropertyTypeFilterProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_type">Tipe Properti</Label>
      <Select name="building_type" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Semua Tipe Properti" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-" className="capitalize">
            Semua Tipe Properti
          </SelectItem>
          {BUILDING_TYPES.map((building, index) => (
            <SelectItem
              key={`${index}_${building.value}`}
              value={building.value}
              className="capitalize"
            >
              {building.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
