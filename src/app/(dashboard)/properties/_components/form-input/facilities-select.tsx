import { Button, buttonVariants } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FACILITIES } from "@/lib/enums/facilities";
import { cn } from "@/lib/utils";
import { LuCheck, LuChevronsUpDown, LuX } from "react-icons/lu";
import { useStore } from "../../_stores";
import { useShallow } from "zustand/react/shallow";

export const FacilitiesSelect = () => {
  const { selectedFacilities, addFacility, removeFacility } = useStore(
    useShallow((state) => ({
      selectedFacilities: state.selectedFacilities,
      addFacility: state.addFacility,
      removeFacility: state.removeFacility,
    })),
  );
  return (
    <div className="grid gap-2">
      <div className="grid gap-1">
        <Label htmlFor="facilities">Fasilitas</Label>
        <span className="text-muted-foreground text-xs">
          Select facilities available near the property
        </span>
      </div>
      <Popover>
        <PopoverTrigger
          className={cn(
            buttonVariants({ variant: "outline" }),
            "justify-between",
          )}
        >
          {selectedFacilities.length > 0
            ? `${selectedFacilities.length} fasilitas dipilih`
            : "Pilih fasilitas..."}
          <LuChevronsUpDown />
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0">
          <Command>
            <CommandInput placeholder="Cari fasilitas" />
            <CommandList>
              <CommandEmpty>Fasilitas tidak ditemukan</CommandEmpty>
              {FACILITIES.map((facil, index) => (
                <CommandItem
                  key={`${index}_${facil.value}`}
                  value={facil.value}
                  onSelect={() => addFacility(facil)}
                >
                  <div
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      selectedFacilities
                        .map((f) => f.indonesian_label)
                        .includes(facil.indonesian_label)
                        ? "bg-primary text-primary-foreground"
                        : "opacity-50",
                    )}
                  >
                    {selectedFacilities
                      .map((f) => f.indonesian_label)
                      .includes(facil.indonesian_label) && (
                      <LuCheck className="h-3 w-3" />
                    )}
                  </div>
                  {facil.indonesian_label}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="flex w-full flex-wrap gap-2">
        {selectedFacilities.length > 0 &&
          selectedFacilities.map((facil, index) => (
            <div
              key={`${index}_${facil.value}_selected`}
              className="border rounded flex items-center p-1 gap-2 pl-2"
            >
              <div className="text-xs capitalize">{facil.indonesian_label}</div>

              <Button
                size="icon"
                className="w-6 h-6"
                variant="ghost"
                type="button"
                onClick={() => removeFacility(facil)}
              >
                <LuX />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};
