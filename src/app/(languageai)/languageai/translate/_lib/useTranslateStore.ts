import { create } from "zustand";

type TUseTranslationStore = {
  translationId: number;
  loadingText: string;
  updatedCompletion: string;
  updateStore: (key: keyof TUseTranslationStore, value: any) => void;
};

export const useTranslationStore = create<TUseTranslationStore>((set) => ({
  translationId: 0,
  loadingText: "",
  updatedCompletion: "",
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
