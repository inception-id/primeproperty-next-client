import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUILDING_CERTIFICATES } from "@/lib/enums/building-certificate";

type BuildingCertificateSelectProps = {
  defaultValue?: string;
};

export const BuildingCertificateSelect = ({
  defaultValue,
}: BuildingCertificateSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_certificate">Sertifikat</Label>
      <Select name="building_certificate" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="HGU/HGB" />
        </SelectTrigger>
        <SelectContent>
          {BUILDING_CERTIFICATES.map((building, index) => (
            <SelectItem
              key={`${index}_${building.value}`}
              value={building.value}
              className="capitalize"
            >
              {building.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
