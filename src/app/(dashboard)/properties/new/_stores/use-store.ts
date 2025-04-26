import { TFacility } from "@/lib/enums/facilities";
import { create } from "zustand";

type Store = {
  isLoading: boolean;
  selectedFacilities: TFacility[];
  addFacility: (facility: TFacility) => void;
  removeFacility: (facility: TFacility) => void;
  setStore: (key: keyof Store, value: string) => void;
};

export const useStore = create<Store>((set) => ({
  isLoading: false,
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
