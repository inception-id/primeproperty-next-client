"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProvince } from "@/hooks";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";

type ProvinceSelectProps = {
  isFilter?: boolean;
  defaultValue?: string;
  onProvinceChange(bpsDomain: BpsDomain | undefined): void;
};

export const ProvinceSelect = ({
  onProvinceChange,
  isFilter,
  defaultValue,
}: ProvinceSelectProps) => {
  const { isLoading, data } = useProvince();

  return (
    <div className="grid gap-2">
      <Label htmlFor="province" className={isFilter ? "hidden" : ""}>
        Provinsi (SEO)
      </Label>
      <Select
        name="province"
        defaultValue={defaultValue}
        onValueChange={(val) => {
          const selectedProvince = data?.find(
            (prov) => prov.domain_name.toLowerCase() === val,
          );
          onProvinceChange(selectedProvince);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Pilih provinsi" />
        </SelectTrigger>
        <SelectContent>
          {isFilter && <SelectItem value="-">Semua Provinsi</SelectItem>}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((province, index) => (
              <SelectItem
                key={`${index}_${province.domain_id}`}
                value={province.domain_name.toLowerCase()}
              >
                {province.domain_name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
