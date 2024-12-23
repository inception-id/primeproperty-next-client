import { create } from "zustand";
import {TLanguage} from "@/lib/api/languages/createLanguage";

type TUseLanguageStore = {
  isLoading: boolean;
  openAddDialog: boolean;
  openUpdateDialog: boolean;
  updateTarget: TLanguage| null;
  updateStore: (key: keyof TUseLanguageStore, value: any) => void;
};

export const useLanguageStore = create<TUseLanguageStore>((set) => ({
  isLoading: false,
  openAddDialog: false,
  openUpdateDialog: false,
  updateTarget: null,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
