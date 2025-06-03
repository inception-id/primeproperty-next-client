"use client";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FilterSort } from "./sort";
import { PropertyTypeFilter } from "./property-type-filter";
import { MdWhatsapp } from "react-icons/md";
import { SearchTypeFilter } from "./search-type-filter";
import { useRouter } from "next/navigation";
import { LocationFilter } from "./location-filter";
import Link from "next/link";
import { createAskUrl } from "@/lib/create-ask-url";
import { sendGAEvent } from "@next/third-parties/google";

type FilterFormProps = {
  searchParams: FindPropertyQuery;
};

export const FilterForm = ({ searchParams }: FilterFormProps) => {
  const router = useRouter();
  const [filterParams, setFilterParams] =
    useState<Omit<FindPropertyQuery, "page">>(searchParams);

  const onCloseClick = () => {
    sendGAEvent("filter_submit");
    const newParams = new URLSearchParams(filterParams);
    router.replace(`/properties?${newParams}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <SearchTypeFilter
        searchType={filterParams.purchase_status}
        onClick={(purchase_status) => {
          setFilterParams({
            ...filterParams,
            purchase_status: purchase_status ?? "",
          });
        }}
      />
      <LocationFilter
        searchParams={searchParams}
        onProvinceChange={(bpsDomain) => {
          setFilterParams({
            ...filterParams,
            province: bpsDomain ? bpsDomain?.nama.toLowerCase() : "",
          });
        }}
        onRegencyChange={(bpsDomain) => {
          setFilterParams({
            ...filterParams,
            regency: bpsDomain ? bpsDomain.nama.toLowerCase() : "",
          });
        }}
      />
      <PropertyTypeFilter
        defaultValue={searchParams.buiding_type}
        onValueChange={(buildType) => {
          setFilterParams({
            ...filterParams,
            buiding_type: buildType ?? "",
          });
        }}
      />
      <FilterSort
        defaultValue={searchParams.sort}
        onValueChange={(val) => {
          setFilterParams({
            ...filterParams,
            sort: val === "Newest" ? "" : val,
          });
        }}
      />
      <div className="flex items-center justify-between mt-4">
        <Link
          href={createAskUrl()}
          target="_blank"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <MdWhatsapp />
          Tanya langsung
        </Link>
        <DialogClose className={cn(buttonVariants())} onClick={onCloseClick}>
          Tampilkan
        </DialogClose>
      </div>
    </div>
  );
};
