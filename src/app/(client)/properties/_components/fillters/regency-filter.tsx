import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";
import { REGENCIES } from "@/lib/enums/regency";
import { useMemo } from "react";

type RegencyFilterProps = {
  provinceId: string;
  onValueChange?: (bpsDomain: BpsDomain | undefined) => void;
  defaultValue?: string;
};

export const RegencyFilter = ({
  provinceId,
  onValueChange,
  defaultValue,
}: RegencyFilterProps) => {
  const PROVINCE_REGENCY: BpsDomain[] = useMemo(() => {
    if (provinceId) {
      return REGENCIES[provinceId as unknown as keyof typeof REGENCIES];
    }
    return [];
  }, [provinceId]);
  return (
    <div className="grid gap-2">
      <Label htmlFor="regency">Wilayah</Label>
      <Select
        name="regency"
        onValueChange={(value) => {
          if (onValueChange) {
            const selectedRegency = PROVINCE_REGENCY?.find(
              (regency) => regency.nama.toLowerCase() === value,
            );
            onValueChange(selectedRegency);
          }
        }}
      >
        <SelectTrigger disabled={provinceId === ""}>
          <SelectValue
            placeholder={defaultValue ? defaultValue : "Pilih provinsi dulu"}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-">Semua Wilayah</SelectItem>
          {PROVINCE_REGENCY?.map((regency, index) => (
            <SelectItem
              key={`${index}-${regency.id}-${regency.id}`}
              value={regency.nama.toLowerCase()}
            >
              {regency.nama}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
