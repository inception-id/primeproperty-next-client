import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProvinceRegency } from "@/hooks/bps/use-province-regency";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";

type ProvinceRegencyProps = {
  provinceId: string;
  isFilter?: boolean;
  onValueChange?: (bpsDomain: BpsDomain | undefined) => void;
  defaultValue?: string;
};

export const ProvinceRegencySelect = ({
  provinceId,
  isFilter,
  onValueChange,
  defaultValue,
}: ProvinceRegencyProps) => {
  const { isLoading, data } = useProvinceRegency(provinceId);

  return (
    <div className="grid gap-2">
      <Label htmlFor="regency" className={isFilter ? "hidden" : ""}>
        Kabupaten (SEO)
      </Label>
      <Select
        name="regency"
        defaultValue={defaultValue}
        onValueChange={(value) => {
          if (onValueChange) {
            const selectedRegency = data?.find(
              (regency) => regency.domain_name.toLowerCase() === value,
            );
            onValueChange(selectedRegency);
          }
        }}
      >
        <SelectTrigger disabled={provinceId === ""}>
          <SelectValue
            placeholder={provinceId ? "Pilih kabupaten" : "Pilih provinsi dulu"}
          />
        </SelectTrigger>
        <SelectContent>
          {isFilter && <SelectItem value="-">Semua Kabupaten</SelectItem>}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((regency, index) => (
              <SelectItem
                key={`${index}-${regency.domain_id}-${regency.domain_name}`}
                value={regency.domain_name.toLowerCase()}
              >
                {regency.domain_name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
