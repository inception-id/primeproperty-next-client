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
import { useEffect } from "react";

type ProvinceFilterProps = {
  defaultValue?: string;
  onProvinceChange(bpsDomain: BpsDomain | undefined): void;
};

export const ProvinceFilter = ({
  onProvinceChange,
  defaultValue,
}: ProvinceFilterProps) => {
  const { isLoading, data } = useProvince();

  useEffect(() => {
    if (defaultValue) {
      const selectedProvince = data?.find(
        (prov) => prov.domain_name.toLowerCase() === defaultValue,
      );
      onProvinceChange(selectedProvince);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, defaultValue]);

  return (
    <div className="grid gap-2">
      <Label htmlFor="province">Provinsi</Label>
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
          <SelectItem value="-">Semua Provinsi</SelectItem>
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
