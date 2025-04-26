import { MeasurementInput } from "../../_components";

export const Measurements = () => {
  return (
    <div className="flex gap-4 md:flex-col">
      <div className="flex flex-col flex-1 gap-4 md:grid md:grid-cols-4">
        <MeasurementInput
          label="Luas Tanah"
          unit="m2"
          id="land_area"
          name="land_area"
        />
        <MeasurementInput
          label="Panjang Tanah"
          unit="m"
          id="land_length"
          name="land_length"
        />
        <MeasurementInput
          label="Lebar Tanah"
          unit="m"
          id="land_width"
          name="land_width"
        />
        <MeasurementInput
          label="Daya Listrik"
          unit="watt"
          id="electrical_power"
          name="electrical_power"
        />
      </div>

      <div className="flex flex-col flex-1 gap-4 md:grid md:grid-cols-4">
        <MeasurementInput
          label="Luas Bangunan"
          unit="m2"
          id="building_area"
          name="building_area"
        />
        <MeasurementInput
          label="Panjang Bangunan"
          unit="m"
          id="building_length"
          name="building_length"
        />
        <MeasurementInput
          label="Lebar Bangunan"
          unit="m"
          id="building_width"
          name="building_width"
        />
        <MeasurementInput
          label="Tinggi Bangunan"
          unit="m"
          id="building_height"
          name="building_height"
        />
      </div>
    </div>
  );
};
