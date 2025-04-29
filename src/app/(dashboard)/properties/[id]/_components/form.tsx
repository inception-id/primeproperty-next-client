import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import {
  DescriptionInput,
  LocationInput,
  StreetInput,
  TitleInput,
} from "../../_components";
import { GmapIframeInput } from "../../_components/form-input/gmap_iframe_input";

type EditPropertyFormProps = {
  propertyWithAgent: PropertyWithAgent;
};

export const EditPropertyForm = ({
  propertyWithAgent,
}: EditPropertyFormProps) => {
  return (
    <form className="grid gap-2 max-w-7xl">
      <div className="grid gap-4 md:flex md:gap-8 md:items-start">
        <div className="grid gap-4 md:max-w-sm">
          <TitleInput defaultValue={propertyWithAgent[0].title} />
          <DescriptionInput defaultValue={propertyWithAgent[0].description} />
          <div className="grid gap-4">
            <LocationInput
              defaultProvinceValue={propertyWithAgent[0].province}
              defaultRegencyValue={propertyWithAgent[0].regency}
            />
            <StreetInput defaultValue={propertyWithAgent[0].street} />
          </div>
          <GmapIframeInput defaultValue={propertyWithAgent[0].gmap_iframe} />
        </div>
        {/* <div className="grid gap-2">
          <div className="grid gap-4 md:gap-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <PurchaseStatusSelect />
              <BuildingCertificateSelect />
              <PriceInput />
              <BuildingTypeSelect />
              <BuildingConditionSelect />
              <BuildingFurnitureSelect />
            </div>
            <div className="grid gap-4">
              <Measurements />
              <Specifications />
            </div>
            <div className="grid gap-4">
              <FacilitiesSelect />
              <ImagesUpload />
            </div>
          </div>
        </div> */}
      </div>
    </form>
  );
};
