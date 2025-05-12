import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Search = () => {
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
        placeholder="Cari lokasi/area"
        className="rounded-l-none border-l-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent w-full pl-0 md:w-96"
      />
    </div>
  );
};
