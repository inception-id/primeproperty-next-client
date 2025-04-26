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
} from "../../_components";
import { LocationInput } from "./location-input";
import { Measurements } from "./measurements";
import { Specifications } from "./specifications";

export const NewPropertyForm = () => {
  return (
    <form className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
      <div className="flex flex-col gap-4">
        <TitleInput />
        <DescriptionInput />
        <LocationInput />
        <StreetInput />
        <div className="grid grid-cols-2 gap-4">
          <PurchaseStatusSelect />
          <PriceInput />
          <BuildingTypeSelect />
          <BuildingCertificateSelect />
          <BuildingConditionSelect />
          <BuildingFurnitureSelect />
        </div>
      </div>

      <div className="h-0.5 w-full bg-muted rounded md:hidden" />
      <div className="flex flex-col gap-4">
        <Measurements />
        <Specifications />
        <FacilitiesSelect />
      </div>
    </form>
  );
};
