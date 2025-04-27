import { TFacility } from "@/lib/enums/facilities";
import { PropertyImage } from "@/lib/enums/property-image";
import { create } from "zustand";

type Store = {
  loadingText: string;
  selectedFacilities: TFacility[];
  addFacility: (facility: TFacility) => void;
  removeFacility: (facility: TFacility) => void;
  images: PropertyImage[];
  setStore: (key: keyof Store, value: any) => void;
};

export const useStore = create<Store>((set) => ({
  loadingText: "",
  images: [],
  selectedFacilities: [],
  setStore: (key: keyof Store, value: string) => set(() => ({ [key]: value })),
  addFacility: (facility: TFacility) =>
    set((state) => {
      const newFacilities = state.selectedFacilities.includes(facility)
        ? state.selectedFacilities.filter(
            (item) => item.value !== facility.value,
          )
        : [...state.selectedFacilities, facility];
      return {
        selectedFacilities: newFacilities,
      };
    }),

  removeFacility: (facility: TFacility) =>
    set((state) => {
      const newFacilities = state.selectedFacilities.filter(
        (item) => item.value !== facility.value,
      );
      return {
        selectedFacilities: newFacilities,
      };
    }),
}));
