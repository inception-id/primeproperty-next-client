"use client";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { FilterDialog } from "./dialog";
import { Search } from "./search";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

type PropertiesFilterProps = {
  searchParams: FindPropertyQuery;
};

const PurchaseStatusToggle = ({ searchParams }: PropertiesFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onAllClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("purchase_status", "");
    newParams.set("page", "1");
    router.replace(`/properties?${newParams.toString()}`);
  };
  const onBuyClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("purchase_status", "ForSale");
    newParams.set("page", "1");
    router.replace(`/properties?${newParams.toString()}`);
  };
  const onSellClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("purchase_status", "ForRent");
    newParams.set("page", "1");
    router.replace(`/properties?${newParams.toString()}`);
  };

  return (
    <div className="flex gap-1 items-center p-0.5 bg-background rounded-lg border ">
      <Button
        type="button"
        size="sm"
        onClick={onAllClick}
        variant={
          !searchParams.purchase_status && pathname === "/properties"
            ? "default"
            : "ghost"
        }
      >
        Semua
      </Button>
      <Button
        type="button"
        size="sm"
        onClick={onBuyClick}
        variant={
          searchParams.purchase_status === "ForSale" ? "default" : "ghost"
        }
      >
        Dijual
      </Button>
      <Button
        type="button"
        size="sm"
        onClick={onSellClick}
        variant={
          searchParams.purchase_status === "ForRent" ? "default" : "ghost"
        }
      >
        Disewa
      </Button>
    </div>
  );
};

export const PropertiesFilter = ({ searchParams }: PropertiesFilterProps) => {
  return (
    <div className="bg-secondary rounded">
      <div className="flex items-center gap-2 container mx-auto md:hidden p-2 px-4">
        <Search />
        <FilterDialog searchParams={searchParams} />
      </div>
      <div className="hidden md:flex items-center gap-2 container mx-auto p-2">
        <Search />
        <PurchaseStatusToggle searchParams={searchParams} />
        <FilterDialog searchParams={searchParams} />
      </div>
    </div>
  );
};
