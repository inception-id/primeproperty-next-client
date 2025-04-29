"use client";
import Link from "next/link";
import { SearchFilter } from "./search-filter";
import { LuCirclePlus } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { ProvinceRegencySelect, ProvinceSelect } from "./form-input";
import { useRouter } from "next/navigation";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";
import { useState } from "react";

type PropertyFilterProps = {
  searchParams: FindPropertyQuery;
};

export const PropertyFilter = ({ searchParams }: PropertyFilterProps) => {
  const router = useRouter();
  const [provinceId, setProvinceId] = useState<string>("");

  const onProvinceChange = (bpsDomain: BpsDomain | undefined) => {
    const newParams = new URLSearchParams(searchParams);
    setProvinceId(bpsDomain?.domain_id || "");
    newParams.set("province", bpsDomain?.domain_name.toLowerCase() || "");
    newParams.set("page", "1");
    router.replace(`/properties?${newParams.toString()}`);
  };

  const onRegencyChange = (bpsDomain: BpsDomain | undefined) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("regency", bpsDomain?.domain_name?.toLowerCase() || "");
    newParams.set("page", "1");
    router.replace(`/properties?${newParams.toString()}`);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SearchFilter searchParams={searchParams} />
        <div className="hidden md:flex items-center gap-2">
          <ProvinceSelect
            isFilter
            onProvinceChange={onProvinceChange}
            defaultValue={searchParams.province}
          />
          <ProvinceRegencySelect
            isFilter
            provinceId={provinceId}
            onValueChange={onRegencyChange}
            defaultValue={searchParams.regency}
          />
        </div>
      </div>
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
