import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuImageUp, LuX } from "react-icons/lu";

export const AdditionalImagesInput = () => {
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState<
    string[]
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = [...additionalImages, ...files];

      // Limit to max 7 images
      const limitedImages = newImages.slice(0, 7);
      setAdditionalImages(limitedImages);

      // Create previews
      const newPreviews = limitedImages.map((file) =>
        URL.createObjectURL(file),
      );

      // Revoke old previews to prevent memory leaks
      additionalImagePreviews.forEach((preview) =>
        URL.revokeObjectURL(preview),
      );

      setAdditionalImagePreviews(newPreviews);
    }
  };

  const removeAdditionalImage = (index: number) => {
    const newImages = [...additionalImages];
    newImages.splice(index, 1);
    setAdditionalImages(newImages);

    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(additionalImagePreviews[index]);

    const newPreviews = [...additionalImagePreviews];
    newPreviews.splice(index, 1);
    setAdditionalImagePreviews(newPreviews);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "flex flex-col gap-2",
          additionalImages.length > 0 && "md:items-center md:flex-row md:gap-4",
        )}
      >
        <div className="flex flex-col gap-0.5">
          <Label className="flex items-center gap-1">
            Additional Images (required)
          </Label>
          <div className="text-muted-foreground text-xs">Min 2, Max 7</div>
        </div>

        <Button
          type="button"
          className="w-fit"
          variant="outline"
          onClick={() => fileInputRef?.current?.click()}
        >
          <LuImageUp />
          <div className="text-xs">
            Click to upload ({additionalImages.length}/7)
          </div>
        </Button>
      </div>

      {additionalImagePreviews.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {additionalImagePreviews.map((preview, index) => (
            <div
              key={index}
              className="relative overflow-hidden border border-dashed"
            >
              <Image
                src={preview}
                alt={`Additional image ${index + 1}`}
                className="w-full md:w-40 md:h-40 h-32 object-cover rounded"
                width={50}
                height={50}
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeAdditionalImage(index)}
              >
                <LuX />
              </Button>
            </div>
          ))}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        name="additional_images"
        multiple
      />
    </div>
  );
};
