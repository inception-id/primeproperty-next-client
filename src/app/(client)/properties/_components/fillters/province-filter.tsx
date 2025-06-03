"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";
import { PROVINCES } from "@/lib/enums/provinces";
import { useEffect } from "react";

type ProvinceFilterProps = {
  defaultValue?: string;
  onProvinceChange(bpsDomain: BpsDomain | undefined): void;
};

export const ProvinceFilter = ({
  onProvinceChange,
  defaultValue,
}: ProvinceFilterProps) => {
  useEffect(() => {
    if (defaultValue) {
      const selectedProvince = PROVINCES?.find(
        (prov) => prov.nama.toLowerCase() === defaultValue,
      );
      onProvinceChange(selectedProvince);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div className="grid gap-2">
      <Label htmlFor="province">Provinsi</Label>
      <Select
        name="province"
        defaultValue={defaultValue}
        onValueChange={(val) => {
          const selectedProvince = PROVINCES?.find(
            (prov) => prov.nama.toLowerCase() === val,
          );
          onProvinceChange(selectedProvince);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Pilih provinsi" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-">Semua Provinsi</SelectItem>
          {PROVINCES?.map((province, index) => (
            <SelectItem
              key={`${index}_${province.id}`}
              value={province.nama.toLowerCase()}
              className="capitalize"
            >
              {province.nama.toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
