import { create } from "zustand";

type TUseTranscriptionStore = {
  isLoading: boolean;
  text: string;
  speechToTextId: number;
  updateStore: (key: keyof TUseTranscriptionStore, value: any) => void;
};

export const useTranscriptionStore = create<TUseTranscriptionStore>((set) => ({
  isLoading: false,
  text: "",
  speechToTextId: 0,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
