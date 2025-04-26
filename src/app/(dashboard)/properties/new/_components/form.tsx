"use client";
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import { cn } from "@/lib/utils";

export const NewPropertyForm = () => {
  return (
    <form className="grid gap-2 max-w-7xl">
      <div className="grid gap-4 md:flex md:gap-8 md:items-start">
        <div className="grid gap-4 md:max-w-sm">
          <TitleInput />
          <DescriptionInput />
          <div className="grid gap-4">
            <LocationInput />
            <StreetInput />
          </div>
          <GmapIframeInput />
        </div>
        <div className="grid gap-2">
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
        </div>
      </div>
      <div className="h-0.5 w-full border" />
      <div className="flex items-center justify-between">
        <Link
          href="/properties"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <LuChevronLeft />
          Back
        </Link>
        <Button type="submit" className="w-fit ml-auto">
          Create Property
        </Button>
      </div>
    </form>
  );
};
