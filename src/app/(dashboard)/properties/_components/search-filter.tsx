import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef } from "react";
import { LuSearch } from "react-icons/lu";

type SearchFilterProps = {
  searchParams: FindPropertyQuery;
};

export const SearchFilter = ({ searchParams }: SearchFilterProps) => {
  const router = useRouter();
  const typingTimeoutRef = useRef<any>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef?.current);
    }

    const newParams = new URLSearchParams(searchParams);
    newParams.set("s", e.target.value);

    typingTimeoutRef.current = setTimeout(() => {
      router.replace(`/properties?${newParams.toString()}`);
    }, 500);
  };
  return (
    <div className="flex items-center w-full md:w-fit">
      <div
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "border-r-transparent rounded-r-none",
        )}
      >
        <LuSearch />
      </div>
      <Input
        type="text"
        id="property-search"
        placeholder="id, judul, jalan"
        className="rounded-l-none border-l-transparent focus-visible:ring-transparent w-full md:w-fit"
        onChange={onChange}
        defaultValue={searchParams?.s ?? ""}
      />
    </div>
  );
};
