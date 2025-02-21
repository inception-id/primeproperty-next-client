import { create } from "zustand";

type TUseLanguageaiStorageSharingStore = {
  isLoading: boolean;
  updateStore: (
    key: keyof TUseLanguageaiStorageSharingStore,
    value: any,
  ) => void;
};

export const useLanguageaiStorageSharingStore =
  create<TUseLanguageaiStorageSharingStore>((set) => ({
    isLoading: false,
    updateStore: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
  }));
