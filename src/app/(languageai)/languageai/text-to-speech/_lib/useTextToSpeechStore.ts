import { create } from "zustand";

type TUseTextToSpeechStore = {
  isLoading: boolean;
  audioUrl: string;
  updateStore: (key: keyof TUseTextToSpeechStore, value: any) => void;
};

export const useTextToSpeechStore = create<TUseTextToSpeechStore>((set) => ({
  isLoading: false,
  audioUrl: "",
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
