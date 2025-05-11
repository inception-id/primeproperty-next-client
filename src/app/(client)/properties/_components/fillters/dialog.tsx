"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LuListFilter, LuX } from "react-icons/lu";
import { FilterSort } from "./sort";
import { PropertyTypeFilter } from "./property-type-filter";
import { ProvinceFilter } from "./province-filter";
import { RegencyFilter } from "./regency-filter";
import { MdWhatsapp } from "react-icons/md";
import { SearchTypeFilter } from "./search-type-filter";

export const FilterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "outline" }))}>
        <LuListFilter />
        <span>Filter</span>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <DialogTitle className="font-semibold">Filter Properti</DialogTitle>
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>

        <div className="flex flex-col gap-4">
          <SearchTypeFilter />
          <div className="grid grid-cols-2 gap-4">
            <ProvinceFilter onProvinceChange={() => {}} />
            <RegencyFilter provinceId="" />
          </div>
          <PropertyTypeFilter />
          <FilterSort />
        </div>
        <div className="flex items-center justify-between mt-4">
          <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
            <MdWhatsapp />
            Tanya langsung
          </DialogClose>
          <DialogClose className={cn(buttonVariants())}>Tampilkan</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
