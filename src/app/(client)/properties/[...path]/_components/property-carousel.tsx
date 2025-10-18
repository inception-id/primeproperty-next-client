import { Button } from "@/components/ui/button";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { useRouter } from "next/navigation";
import { LuArrowLeft, LuEye, LuTag } from "react-icons/lu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WatermarkImage } from "@/components/custom-ui/watermark-image";
import React from "react";
import { PropertyImage } from "@/lib/enums/property-image";

const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;

type ImageCarouselProps = {
  coverImageIndex?: number;
  images: PropertyImage[];
  onImageClick: (index: number) => void;
  propertyTitle: string;
};

const ImageCarousel = ({
  coverImageIndex,
  images,
  propertyTitle,
  onImageClick,
}: ImageCarouselProps) => {
  const router = useRouter();
  return (
    <div className="relative w-full lg:col-span-2 xl:col-span-3">
      <Button
        onClick={() => router.back()}
        type="button"
        variant="secondary"
        size="icon"
        className="rounded-full absolute top-2 left-2 z-10"
      >
        <LuArrowLeft className="text-xl" />
      </Button>
      <Carousel opts={{ startIndex: coverImageIndex ?? 0 }}>
        <CarouselContent>
          {images.map((propImg, index) => (
            <CarouselItem
              key={`${index}_${propImg.path}_carousel`}
              onClick={() => onImageClick(index)}
            >
              <div className="relative cursor-ew-resize">
                <WatermarkImage
                  watermarkProps={{}}
                  imageProps={{
                    src: baseImgPath + propImg.path,
                    alt: propImg.indonesian_label ?? propertyTitle,
                    width: 1024,
                    height: 768,
                    priority: true,
                    className:
                      "w-full h-60 md:h-80 lg:h-96 aspect-16/9 object-cover",
                  }}
                />
                {propImg.indonesian_label && (
                  <div className="bg-primary text-primary-foreground text-xs flex gap-1 absolute right-1 top-1 items-center px-2 py-1 rounded">
                    <LuTag />
                    <span>{propImg.indonesian_label}</span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="bg-background/75 text-foreground absolute right-1 bottom-1 text-xs p-1 rounded">
        Click to zoom, slide to change
      </div>
    </div>
  );
};

type ImageThumbnailProps = {
  images: PropertyImage[];
  propertyTitle: string;
  onImageClick: (index: number) => void;
};

const ImageThumbnail = ({
  images,
  propertyTitle,
  onImageClick,
}: ImageThumbnailProps) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 lg:h-80">
      {images.slice(0, 3).map((img, index) => (
        <React.Fragment key={`${index}_${img.indonesian_label}_preview`}>
          <WatermarkImage
            watermarkProps={{
              fontSize: 36,
            }}
            imageProps={{
              src: baseImgPath + img.path,
              alt: img.indonesian_label ?? propertyTitle,
              width: 512,
              height: 512,
              className:
                "w-full h-20 md:h-40 lg:h-48 cursor-pointer object-cover aspect-square",
              onClick: () => onImageClick(index),
            }}
          />
        </React.Fragment>
      ))}

      <div className="relative hidden lg:block cursor-pointer">
        <WatermarkImage
          watermarkProps={{
            fontSize: 24,
          }}
          imageProps={{
            src: baseImgPath + images[0].path,
            alt: images[0].indonesian_label ?? propertyTitle,
            width: 512,
            height: 512,
            className: "w-full h-48 cursor-pointer",
            onClick: () => onImageClick(0),
          }}
        />

        <Button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          size="sm"
          onClick={() => onImageClick(0)}
        >
          <LuEye />
          Lihat Semua
        </Button>
      </div>
    </div>
  );
};

type PropertyCarouselProps = {
  propertyWithAgent: PropertyWithAgent;
  onImageClick: (imageIndex: number) => void;
};

export const PropertyCarousel = ({
  propertyWithAgent,
  onImageClick,
}: PropertyCarouselProps) => {
  const coverImage =
    propertyWithAgent[0].images.find((img) => img.is_cover) ??
    propertyWithAgent[0].images[0];
  const coverImageIndex = propertyWithAgent[0].images.indexOf(coverImage);

  return (
    <div
      className="lg:grid lg:grid-cols-3 xl:grid-cols-4"
      onContextMenu={(e) => e.preventDefault()}
    >
      <ImageCarousel
        coverImageIndex={coverImageIndex}
        images={propertyWithAgent[0].images}
        propertyTitle={propertyWithAgent[0].title}
        onImageClick={onImageClick}
      />
      <ImageThumbnail
        images={propertyWithAgent[0].images}
        propertyTitle={propertyWithAgent[0].title}
        onImageClick={onImageClick}
      />
    </div>
  );
};
