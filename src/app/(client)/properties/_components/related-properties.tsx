import { PropertyCard } from "./card";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { findRelatedProperties } from "@/lib/api/properties/find-related-properties";

type RelatedPropertiesProps = {
  propertyId: number;
};

export const RelatedProperties = async ({
  propertyId,
}: RelatedPropertiesProps) => {
  const relatedProperties = await findRelatedProperties(propertyId);
  if (relatedProperties?.data && relatedProperties?.data?.length > 0)
    return (
      <Carousel>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Properti Terkait</h3>
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
        <CarouselContent>
          {relatedProperties.data.map((propertyWithAgent, index) => (
            <CarouselItem
              key={`${index}_related_properties`}
              className="basis-4/5 md:basis-1/2 lg:basis-1/3"
            >
              <PropertyCard propertyWithAgent={propertyWithAgent} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );

  return <></>;
};
