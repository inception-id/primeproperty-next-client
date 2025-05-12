"use client";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { useMemo, useState } from "react";

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

type FilterFormProps = {
  searchParams: FindPropertyQuery;
};

export const FilterForm = ({ searchParams }: FilterFormProps) => {
  const router = useRouter();
  const askUrl = useMemo(() => {
    const whatsappUrl = new URL("https://api.whatsapp.com/send");
    whatsappUrl.searchParams.append("phone", "6282116162995");
    const text = `Hai, saya ingin bertanya-tanya tentang daftar properti di : \n${window.location.href}\nMohon informasinya terkait hal tersebut.`;
    whatsappUrl.searchParams.append("text", text);
    return whatsappUrl;
  }, []);
  const [filterParams, setFilterParams] =
    useState<Omit<FindPropertyQuery, "page">>(searchParams);

  const onCloseClick = () => {
    const newParams = new URLSearchParams(filterParams).toString();
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
            province: bpsDomain ? bpsDomain?.domain_name.toLowerCase() : "",
          });
        }}
        onRegencyChange={(bpsDomain) => {
          setFilterParams({
            ...filterParams,
            regency: bpsDomain ? bpsDomain.domain_name.toLowerCase() : "",
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
          href={askUrl}
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
