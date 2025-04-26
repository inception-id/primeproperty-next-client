import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertyImage } from "@/lib/enums/property-image";
import { Button } from "@/components/ui/button";
import { LuUpload } from "react-icons/lu";
import Image from "next/image";
import { env } from "@/lib/env";

export const ImagesUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<PropertyImage[]>([]);

  const handleAdditionalImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && images.length < 8) {
      const files = Array.from(e.target.files);
      const limitedFiles = files.slice(0, 8 - images.length);
      const newUploadedImages: PropertyImage[] = limitedFiles.map(
        (file, index) => {
          return {
            is_cover: images.length === 0 && index === 0,
            object_url: URL.createObjectURL(file),
            path: "",
            english_label: "",
            indonesian_label: "",
          };
        },
      );
      // // Revoke old previews to prevent memory leaks
      images.forEach((propertyImg) => {
        return {
          ...propertyImg,
          object_url: propertyImg.object_url
            ? URL.revokeObjectURL(propertyImg.object_url)
            : "",
        };
      });
      const newImages = [...images, ...newUploadedImages];
      setImages(newImages);
      return;
    }
  };

  return (
    <div className="grid gap-2">
      <Label className="images">Upload Images (Min 3, Max 8)</Label>
      <Button
        type="button"
        size="sm"
        disabled={images.length === 8}
        className="w-fit"
        onClick={() => inputRef?.current?.click()}
      >
        <LuUpload />
        {images.length === 8 ? "Disabled: 8 pictures reached" : "Upload"}
      </Button>
      <Input
        type="file"
        multiple
        name="images"
        id="images"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleAdditionalImagesChange}
      />
      <div className="grid grid-cols-2 md:grid-flow-col gap-2">
        {images.map((image, index) => (
          <Image
            key={`image-${index}`}
            src={
              image.object_url
                ? image.object_url
                : `${env.NEXT_PUBLIC_S3_ENDPOINT}${image.path}`
            }
            alt={image.english_label}
            width={100}
            height={100}
            className="w-full rounded h-32 gap-4"
          />
        ))}
      </div>
    </div>
  );
};
