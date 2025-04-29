import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { MeasurementInput } from "../../_components";

type SpecificationsProps = {
  propertyWithAgent?: PropertyWithAgent;
};
export const Specifications = ({ propertyWithAgent }: SpecificationsProps) => {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
      <MeasurementInput
        label="Kamar Tidur"
        id="bedrooms"
        name="bedrooms"
        defaultValue={propertyWithAgent?.[0].specifications.bedrooms}
      />
      <MeasurementInput
        label="Kamar Mandi"
        id="bathrooms"
        name="bathrooms"
        defaultValue={propertyWithAgent?.[0].specifications.bathrooms}
      />
      <MeasurementInput
        label="Garasi"
        unit="mobil"
        id="garage"
        name="garage"
        defaultValue={propertyWithAgent?.[0].specifications.garage}
      />
      <MeasurementInput
        label="Carport"
        unit="mobil"
        id="carport"
        name="carport"
        defaultValue={propertyWithAgent?.[0].specifications.carport}
      />
    </div>
  );
};
