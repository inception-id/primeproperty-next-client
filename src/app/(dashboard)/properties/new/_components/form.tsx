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
import {
  converPropertyFormDataToApiData,
  PropertyApiSchema,
  PropertyFormData,
} from "../../_libs";
import { useStore } from "../../_stores";
import { useShallow } from "zustand/react/shallow";
import { toast } from "react-toastify";
import { createProperty } from "@/lib/api/properties/create-property";
import { uploadPropertyImages } from "@/lib/s3/upload-property-images";

export const NewPropertyForm = () => {
  const { facilities, images, setStore, loadingText } = useStore(
    useShallow((state) => ({
      facilities: state.selectedFacilities,
      images: state.images,
      setStore: state.setStore,
      loadingText: state.loadingText,
    })),
  );
  const handleAction = async (formData: FormData) => {
    const dataEntry = Object.fromEntries(formData) as PropertyFormData;
    if (dataEntry.gmap_iframe && !dataEntry.gmap_iframe.includes("iframe")) {
      toast.error("Invalid Google Map iframe URL");
      return;
    }
    const propertyApiData = converPropertyFormDataToApiData(
      dataEntry,
      facilities,
      images,
    );
    try {
      const schemaValidation = PropertyApiSchema.safeParse(propertyApiData);
      if (!schemaValidation.success) {
        const errorMsg = schemaValidation.error.errors[0].message;
        toast.error(errorMsg);
        return;
      }

      setStore("loadingText", "Uploading images...");
      const uploadedImages = await uploadPropertyImages(images, formData);
      if (uploadedImages.length === 0) {
        toast.error("Failed to upload images, contact admin immediately!");
        return;
      }

      setStore("loadingText", "Creating property...");
      uploadedImages.forEach((img) => {
        if (img.object_url) URL.revokeObjectURL(img.object_url);
      });
      propertyApiData.images = uploadedImages;
      const property = await createProperty(propertyApiData);
      if (property.status === 201) {
        toast.success("Property created successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return;
      }
      toast.error("An error occurred, please check your input and try again");
      return;
    } catch (error) {
      console.error(error);
      toast.error("An error occurred, please check your input and try again");
    } finally {
      setStore("loadingText", "");
    }
  };

  return (
    <form className="grid gap-2 max-w-7xl" action={handleAction}>
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
        <Button
          type="submit"
          className="w-fit ml-auto"
          disabled={loadingText !== ""}
        >
          {loadingText ? loadingText : "Create Property"}
        </Button>
      </div>
    </form>
  );
};
