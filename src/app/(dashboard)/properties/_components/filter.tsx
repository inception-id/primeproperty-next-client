"use client";
import Link from "next/link";
import { SearchFilter } from "./search-filter";
import { LuCirclePlus } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";

type PropertyFilterProps = {
  searchParams: FindPropertyQuery;
};

export const PropertyFilter = ({ searchParams }: PropertyFilterProps) => {
  return (
    <div className="flex items-center justify-between">
      <SearchFilter searchParams={searchParams} />
      <Link
        href="/properties/new"
        className={cn(buttonVariants({ size: "icon" }), "hidden md:flex")}
        data-tooltip-id="add-new-property"
        data-tooltip-content="Add new property"
      >
        <LuCirclePlus />
      </Link>
      <Tooltip id="add-new-property" />
    </div>
  );
};
