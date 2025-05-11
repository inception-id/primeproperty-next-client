import { useState } from "react";
import { ProvinceFilter } from "./province-filter";
import { RegencyFilter } from "./regency-filter";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";

type LocationFilterProps = {
  searchParams: FindPropertyQuery;
  onProvinceChange: (bpsDomain: BpsDomain | undefined) => void;
  onRegencyChange: (bpsDomain: BpsDomain | undefined) => void;
};

export const LocationFilter = ({
  searchParams,
  onRegencyChange,
  onProvinceChange,
}: LocationFilterProps) => {
  const [province, setProvince] = useState<BpsDomain | undefined>(undefined);

  return (
    <div className="grid grid-cols-2 gap-4">
      <ProvinceFilter
        defaultValue={searchParams.province}
        onProvinceChange={(bpsDomain) => {
          onProvinceChange(bpsDomain);
          setProvince(bpsDomain);
        }}
      />
      <RegencyFilter
        defaultValue={searchParams.regency}
        provinceId={province?.domain_id ?? ""}
        onValueChange={onRegencyChange}
      />
    </div>
  );
};
