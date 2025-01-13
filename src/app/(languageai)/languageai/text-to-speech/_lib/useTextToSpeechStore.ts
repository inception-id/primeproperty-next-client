import { create } from "zustand";

type TUseTextToSpeechStore = {
  isLoading: boolean;
  audioUrl: string;
  ttsId: number;
  updateStore: (key: keyof TUseTextToSpeechStore, value: any) => void;
};

export const useTextToSpeechStore = create<TUseTextToSpeechStore>((set) => ({
  isLoading: false,
  audioUrl: "",
  ttsId: 0,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
