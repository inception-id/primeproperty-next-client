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
        )}
      >
        <LuListFilter />
        <span>Filter</span>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4 z-40">
        <div className="flex items-center justify-between">
          <DialogTitle className="font-semibold">Filter Properti</DialogTitle>
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>
        <FilterForm searchParams={searchParams} />
      </DialogContent>
    </Dialog>
  );
};
