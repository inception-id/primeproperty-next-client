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
} from "../../_components";
import { LocationInput } from "./location-input";

export const NewPropertyForm = () => {
  return (
    <form className="flex flex-col gap-4 max-w-lg">
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
    </form>
  );
};
