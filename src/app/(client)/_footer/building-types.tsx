import { BUILDING_TYPES } from "@/lib/enums/building-type";
import Link from "next/link";

export const FooterBuildingTypes = () => {
  return (
    <div className="grid gap-2">
      <div className="font-bold">Daftar Properti</div>
      <div className="grid grid-cols-2 gap-2">
        {BUILDING_TYPES.map((buildingType, index) => (
          <Link
            key={`${index}_${buildingType.value}_footer`}
            href={`/properties?buiding_type=${buildingType.value.toLowerCase()}`}
            className="hover:underline capitalize"
          >
            {buildingType.value}
          </Link>
        ))}
      </div>
    </div>
  );
};
