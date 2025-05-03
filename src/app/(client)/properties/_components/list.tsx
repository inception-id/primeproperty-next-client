"use client";
import { useProperties } from "@/hooks";
import Image from "next/image";
import React from "react";
import { PropertyCard } from "./card";

export const PropertyList = () => {
  const { isLoading, data } = useProperties();

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-96 flex items-center justify-center">
        <Image
          src="/images/primepro-with-full-text.png"
          alt="Loading"
          width={150}
          height={150}
          className="animate-bounce"
        />
      </div>
    );
  }

  // TODO: If no data return search box
  if (!data?.data) {
    return <>Error</>;
  }

  return (
    <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 xl:grid-cols-4 ">
      {data.data.data.map((propertyWithAgent, index) => (
        <React.Fragment key={`${index}-${propertyWithAgent[0].id}`}>
          <PropertyCard propertyWithAgent={propertyWithAgent} />
        </React.Fragment>
      ))}
    </div>
  );
};
