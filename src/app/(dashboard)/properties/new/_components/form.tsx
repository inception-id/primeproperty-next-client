"use client";
import {
  DescriptionInput,
  TitleInput,
  StreetInput,
  PriceInput,
  PurchaseStatusSelect,
  BuildingTypeSelect,
  BuildingConditionSelect,
  BuildingFurnitureSelect,
  BuildingCertificateSelect,
  FacilitiesSelect,
  ImagesUpload,
} from "../../_components";
import { GmapIframeInput } from "../../_components/form-input/gmap_iframe_input";
import { LocationInput } from "./location-input";
import { Measurements } from "./measurements";
import { Specifications } from "./specifications";

export const NewPropertyForm = () => {
  return (
    <form className="grid gap-4 md:flex md:gap-8 md:items-start">
      <div className="grid gap-4 md:max-w-sm">
        <TitleInput />
        <DescriptionInput />
        <div className="grid gap-4">
          <LocationInput />
          <StreetInput />
        </div>
        <GmapIframeInput />
      </div>
      <div className="grid gap-4 md:gap-12">
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
    </form>
  );
};
