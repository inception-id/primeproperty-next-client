import { findProperties } from "@/lib/api/properties/find-properties";
import { PropertyCard } from "./card";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PopularProperties = async () => {
  const properties = await findProperties({ is_popular: "true" });
  if (properties.data?.data && properties.data?.data.length > 0)
    return (
      <Carousel>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">Properti Populer</h3>
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
        <CarouselContent>
          {properties.data.data.map((propertyWithAgent, index) => (
            <CarouselItem
              key={`${index}_popular_properties`}
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
