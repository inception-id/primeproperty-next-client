import { Button } from "@/components/ui/button";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { useRouter } from "next/navigation";
import { LuArrowLeft, LuTag } from "react-icons/lu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WatermarkImage } from "@/components/custom-ui/watermark-image";
import React from "react";

type PropertyCarouselProps = {
  propertyWithAgent: PropertyWithAgent;
  onImageClick: (imageIndex: number) => void;
};

export const PropertyCarousel = ({
  propertyWithAgent,
  onImageClick,
}: PropertyCarouselProps) => {
  const router = useRouter();
  const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;
  const coverImage =
    propertyWithAgent[0].images.find((img) => img.is_cover) ??
    propertyWithAgent[0].images[0];
  const coverImageIndex = propertyWithAgent[0].images.indexOf(coverImage);

  return (
    <div
      className="relative md:grid md:grid-cols-3"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Button
        onClick={() => router.back()}
        type="button"
        variant="secondary"
        size="icon"
        className="rounded-full absolute top-2 left-2 z-10"
      >
        <LuArrowLeft className="text-xl" />
      </Button>
      <Carousel
        opts={{ startIndex: coverImageIndex ?? 0 }}
        className="md:col-span-2"
      >
        <CarouselContent>
          {propertyWithAgent[0].images.map((propImg, index) => (
            <CarouselItem
              key={`${index}_${propImg.path}_carousel`}
              onClick={() => onImageClick(index)}
            >
              <div className="relative cursor-ew-resize">
                <WatermarkImage
                  watermarkProps={{
                    fontSize: 24,
                  }}
                  imageProps={{
                    src: baseImgPath + propImg.path,
                    alt: propImg.indonesian_label,
                    width: 1000,
                    height: 1000,
                    priority: true,
                    className: "w-full h-60 md:h-80 xl:rounded-md",
                  }}
                />
                {propImg.indonesian_label && (
                  <div className="bg-background text-foreground text-xs flex gap-1 absolute right-0 top-0 items-center px-1 py-0.5 rounded">
                    <LuTag />
                    <span>{propImg.indonesian_label}</span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-3 md:hidden">
        {propertyWithAgent[0].images.slice(0, 3).map((img, index) => (
          <React.Fragment key={`${index}_${img.indonesian_label}_preview`}>
            <WatermarkImage
              watermarkProps={{
                fontSize: 36,
              }}
              imageProps={{
                src: baseImgPath + img.path,
                alt: img.indonesian_label,
                width: 1000,
                height: 1000,
                className: "w-full h-20",
              }}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 h-80">
        {propertyWithAgent[0].images.map((img, index) => (
          <div
            key={`${index}_${img.indonesian_label}_preview_desktop`}
            className="relative"
          >
            <WatermarkImage
              watermarkProps={{
                fontSize: 24,
              }}
              imageProps={{
                src: baseImgPath + img.path,
                alt: img.indonesian_label,
                width: 1000,
                height: 1000,
                className: "w-full h-40 xl:rounded-md cursor-pointer",
                onClick: () => onImageClick(index),
              }}
            />
            {img.indonesian_label && (
              <div className="bg-background text-foreground text-xs flex gap-1 absolute right-0 top-0 items-center px-1 py-0.5 rounded">
                <LuTag />
                <span>{img.indonesian_label}</span>
              </div>
            )}
          </div>
        ))}
        {propertyWithAgent[0].images.length % 2 != 0 && (
          <div className="relative">
            <WatermarkImage
              watermarkProps={{
                fontSize: 24,
              }}
              imageProps={{
                src: baseImgPath + propertyWithAgent[0].images[0].path,
                alt: propertyWithAgent[0].images[0].indonesian_label,
                width: 1000,
                height: 1000,
                className: "w-full h-40 rounded-md cursor-pointer",
                onClick: () => onImageClick(0),
              }}
            />

            {propertyWithAgent[0].images[0].indonesian_label && (
              <div className="bg-background text-foreground text-xs flex gap-1 absolute right-0 top-0 items-center px-1 py-0.5 rounded">
                <LuTag />
                <span>{propertyWithAgent[0].images[0].indonesian_label}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
