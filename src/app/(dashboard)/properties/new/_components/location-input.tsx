import { useState } from "react";
import { ProvinceSelect } from "../../_components";
import { ProvinceRegencySelect } from "../../_components/form-input/province-regency";

export const LocationInput = () => {
  const [provinceId, setProvinceId] = useState<string>("");
  console.log(provinceId);

  return (
    <div className="grid grid-cols-2 gap-4">
      <ProvinceSelect onProvinceChange={setProvinceId} />
      <ProvinceRegencySelect provinceId={provinceId} />
    </div>
  );
};
