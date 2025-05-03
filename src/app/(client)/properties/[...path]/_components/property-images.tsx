"use client";
import { Button } from "@/components/ui/button";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

type PropertyImagesProps = {
  propertyWithAgent: PropertyWithAgent;
};

export const PropertyImages = ({ propertyWithAgent }: PropertyImagesProps) => {
  const router = useRouter();
  const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;
  const coverImage =
    propertyWithAgent[0].images.find((img) => img.is_cover) ??
    propertyWithAgent[0].images[0];
  return (
    <div className="w-full md:flex md:items-center  md:gap-2 md:h-96">
      <div className="w-full h-full relative">
        <Button
          onClick={() => router.back()}
          type="button"
          variant="secondary"
          size="icon"
          className="rounded-full absolute top-2 left-2"
        >
          <LuArrowLeft className="text-xl" />
        </Button>
        <Image
          src={baseImgPath + coverImage.path}
          alt={propertyWithAgent[0].title}
          width={720}
          height={640}
          priority
          className=" w-full object-cover max-h-80 md:max-h-none md:rounded-2xl md:object-fill md:h-full"
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 md:gap-2 md:w-48 h-full">
        {propertyWithAgent[0].images.slice(0, 3).map((image, index) => (
          <Image
            key={`image-${index}`}
            src={baseImgPath + image.path}
            alt={image.indonesian_label}
            width={720}
            height={480}
            className="w-full max-h-20 md:max-h-full object-cover md:object-fill md:rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};
