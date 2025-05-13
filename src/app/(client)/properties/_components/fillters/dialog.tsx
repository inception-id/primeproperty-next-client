import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LuListFilter, LuX } from "react-icons/lu";
import { FilterForm } from "./form";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";

type FilterDialogProps = {
  searchParams: FindPropertyQuery;
};

export const FilterDialog = ({ searchParams }: FilterDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "relative",
        )}
      >
        <LuListFilter />
        <span>Filter</span>
        {Object.values(searchParams).filter((val) => val).length > 0 && (
          <span className="absolute -top-2 -right-2 bg-foreground text-background rounded-full h-4 w-4 text-xs font-semibold">
            {Object.values(searchParams).filter((val) => val).length}
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4 z-40">
        <div className="flex items-center justify-between">
          <DialogTitle className="font-semibold">Filter Properti</DialogTitle>
          <DialogDescription />
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>
        <FilterForm searchParams={searchParams} />
      </DialogContent>
    </Dialog>
  );
};
