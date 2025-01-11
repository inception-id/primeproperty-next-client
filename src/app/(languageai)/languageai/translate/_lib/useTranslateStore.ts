import { create } from "zustand";

type TUseTranslationStore = {
  translationId: number;
  updatedCompletion: string;
  updateStore: (key: keyof TUseTranslationStore, value: any) => void;
};

export const useTranslationStore = create<TUseTranslationStore>((set) => ({
  translationId: 0,
  updatedCompletion: "",
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
