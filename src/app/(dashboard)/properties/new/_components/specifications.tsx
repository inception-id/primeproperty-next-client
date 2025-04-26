import { MeasurementInput } from "../../_components";

export const Specifications = () => {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
      <MeasurementInput label="Kamar Tidur" id="bedrooms" name="bedrooms" />
      <MeasurementInput label="Kamar Mandi" id="bathrooms" name="bathrooms" />
      <MeasurementInput label="Garasi" unit="mobil" id="garage" name="garage" />
      <MeasurementInput
        label="Carport"
        unit="mobil"
        id="carport"
        name="carport"
      />
    </div>
  );
};
