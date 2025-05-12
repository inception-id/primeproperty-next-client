import React from "react";
import { PropertyCard } from "./card";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";

type PropertyListProps = {
  propertiesWithAgent: PropertyWithAgent[];
};

export const PropertyList = ({ propertiesWithAgent }: PropertyListProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-16 w-full">
      {propertiesWithAgent.map((propertyWithAgent, index) => (
        <React.Fragment key={`${index}-${propertyWithAgent[0].id}`}>
          <PropertyCard propertyWithAgent={propertyWithAgent} />
        </React.Fragment>
      ))}
    </div>
  );
};
