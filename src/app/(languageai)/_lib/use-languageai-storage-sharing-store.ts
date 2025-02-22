import { create } from "zustand";

type TUseLanguageaiStorageSharingStore = {
  loadingText: string;
  updateStore: (
    key: keyof TUseLanguageaiStorageSharingStore,
    value: any,
  ) => void;
};

export const useLanguageaiStorageSharingStore =
  create<TUseLanguageaiStorageSharingStore>((set) => ({
    loadingText: "",
    updateStore: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
  }));
