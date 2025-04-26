import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUILDING_TYPES } from "@/lib/enums/building-type";

export const BuildingTypeSelect = () => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_type">Tipe Properti</Label>
      <Select name="building_type">
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Rumah/Apart" />
        </SelectTrigger>
        <SelectContent>
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
