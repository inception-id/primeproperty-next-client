import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import {
  BuildingCertificateSelect,
  BuildingConditionSelect,
  BuildingFurnitureSelect,
  BuildingTypeSelect,
  DescriptionInput,
  FacilitiesSelect,
  ImagesUpload,
  LocationInput,
  PriceInput,
  PurchaseStatusSelect,
  SoldStatusSelect,
  StreetInput,
  TitleInput,
} from "../../_components";
import { GmapIframeInput } from "../../_components/form-input/gmap_iframe_input";
import { Measurements } from "../../_components/form-input/measurements";
import { Specifications } from "../../_components/form-input/specifications";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import { useStore } from "../../_stores";
import { useShallow } from "zustand/react/shallow";
import {
  converPropertyFormDataToApiData,
  PropertyApiSchema,
  PropertyFormData,
} from "../../_libs";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { uploadPropertyImages } from "@/lib/s3/upload-property-images";
import { updateProperty } from "@/lib/api/properties/update-property";

type EditPropertyFormProps = {
  propertyWithAgent: PropertyWithAgent;
};

export const EditPropertyForm = ({
  propertyWithAgent,
}: EditPropertyFormProps) => {
  const queryClient = useQueryClient();
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
      if (images.length < 3) {
        toast.error("Minimum 3 gambar");
        return;
      }
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
      propertyApiData.images = uploadedImages;
      const property = await updateProperty(
        propertyWithAgent[0].id,
        propertyApiData,
      );
      if (property.status !== 200) {
        toast.error("Error: please check your input and try again");
        return;
      }

      uploadedImages.forEach((img) => {
        if (img.object_url) URL.revokeObjectURL(img.object_url);
      });
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property updated successfully");
      return;
    } catch (error) {
      console.error(error);
      toast.error("Error: please check your input and try again");
    } finally {
      setStore("loadingText", "");
    }
  };

  return (
    <form className="grid gap-2 max-w-7xl" action={handleAction}>
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
        <div className="grid gap-2">
          <div className="grid gap-4 md:gap-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <PurchaseStatusSelect
                defaultValue={propertyWithAgent[0].purchase_status}
              />
              <BuildingCertificateSelect
                defaultValue={propertyWithAgent[0].building_certificate}
              />
              <PriceInput defaultValue={propertyWithAgent[0].price} />
              <SoldStatusSelect
                defaultValue={propertyWithAgent[0].sold_status}
              />
              <BuildingTypeSelect
                defaultValue={propertyWithAgent[0].building_type}
              />
              <BuildingConditionSelect
                defaultValue={propertyWithAgent[0].building_condition}
              />
              <BuildingFurnitureSelect
                defaultValue={
                  propertyWithAgent[0].building_furniture_capacity ?? undefined
                }
              />
            </div>
            <div className="grid gap-4">
              <Measurements propertyWithAgent={propertyWithAgent} />
              <Specifications propertyWithAgent={propertyWithAgent} />
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
          className={cn(
            "w-fit ml-auto",
            loadingText !== "" && "animate-bounce",
          )}
          disabled={loadingText !== ""}
        >
          {loadingText ? loadingText : "Save"}
        </Button>
      </div>
    </form>
  );
};
