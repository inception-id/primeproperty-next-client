import { MeasurementInput } from "../../_components";

export const Measurements = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <MeasurementInput
        label="Luas Tanah"
        unit="m2"
        id="land_area"
        name="land_area"
      />
      <MeasurementInput
        label="Luas Bangunan"
        unit="m2"
        id="building_area"
        name="building_area"
      />
      <MeasurementInput
        label="Tinggi Bangunan"
        unit="lantai"
        id="building_level"
        name="building_level"
      />
      <MeasurementInput
        label="Daya Listrik"
        unit="watt"
        id="electrical_power"
        name="electrical_power"
      />
    </div>
  );
};
