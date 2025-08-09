import React from "react";
import { PropertyCard } from "./card";
import {
  FindPropertyQuery,
  PropertyWithAgent,
} from "@/lib/api/properties/find-properties";
import { LuHouse, LuSearch } from "react-icons/lu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FilterDialog } from "./fillters";

type PropertyListProps = {
  searchParams: FindPropertyQuery;
  propertiesWithAgent: PropertyWithAgent[];
};

export const PropertyList = ({
  searchParams,
  propertiesWithAgent,
}: PropertyListProps) => {
  if (propertiesWithAgent.length === 0) {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-center">
        <LuSearch className="text-5xl mb-2" />
        <p className="text-2xl font-bold mb-4">Pencarian tidak ditemukan</p>
        <div className="flex items-center gap-2">
          <Link
            href="/properties"
            className={cn(buttonVariants({ variant: "default" }))}
            aria-label="Lihat Semua Properti"
            title="Lihat Semua Properti"
          >
            <LuHouse />
            Lihat Semua
          </Link>
          <FilterDialog searchParams={searchParams} />
        </div>
      </div>
    );
  }

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
