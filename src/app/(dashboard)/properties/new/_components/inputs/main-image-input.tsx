import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";

export const MainImageInput = () => {
  const [mainImage, setMainImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMainImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <Label className="flex items-center gap-1">Main Image (required)</Label>
        <div className="text-muted-foreground text-xs">
          The first image that your client sees.
        </div>
      </div>

      <button
        className="border border-dashed w-full md:w-96 h-48 md:h-48 flex flex-col gap-2 rounded items-center justify-center text-muted-foreground/50 hover:bg-muted p-2"
        type="button"
        onClick={() => fileInputRef?.current?.click()}
      >
        {mainImage ? (
          <Image
            src={mainImage}
            alt="Main Image"
            className="h-full w-full object-cover"
            width={200}
            height={200}
          />
        ) : (
          <>
            <LuImagePlus className="size-16" />
            <div className="text-sm">Click to upload</div>
          </>
        )}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        name="main_image"
      />
    </div>
  );
};
