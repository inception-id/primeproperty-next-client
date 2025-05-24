import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { LuTag, LuX } from "react-icons/lu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ContactAgentDialog } from "../../_components/contact-agent-dialog";
import { WatermarkImage } from "@/components/custom-ui/watermark-image";

type PropertyDialogCarouselProps = {
  startIndex: number;
  propertyWithAgent: PropertyWithAgent;
  onCloseClick: () => void;
};

export const PropertyDialogCarousel = ({
  startIndex,
  propertyWithAgent,
  onCloseClick,
}: PropertyDialogCarouselProps) => {
  const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;
  return (
    <div className="relative ">
      <DialogClose
        onClick={onCloseClick}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "absolute -top-2 -right-2 z-50 rounded-full",
        )}
      >
        <LuX />
      </DialogClose>
      <Carousel opts={{ startIndex: startIndex }}>
        <CarouselContent>
          {propertyWithAgent[0].images.map((propImg, index) => (
            <CarouselItem key={`${index}_${propImg.path}_carousel`}>
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
                    className:
                      "w-full rounded-md size-96 md:h-[75vh] object-fill aspect-video",
                  }}
                />
                {propImg.indonesian_label && (
                  <div className="bg-background text-foreground text-xs flex gap-1 absolute left-0 top-0 items-center px-1 py-0.5 ">
                    <LuTag />
                    <span>{propImg.indonesian_label}</span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-4">
          <ContactAgentDialog
            isWhatsapp
            isPhotoRequest
            propertyWithAgent={propertyWithAgent}
          />
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
