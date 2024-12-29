import { create } from "zustand";

type TUseTranscriptionStore = {
    isLoading: boolean;
    text: string;
    updateStore: (key: keyof TUseTranscriptionStore, value: any) => void;
};

export const useTranscriptionStore = create<TUseTranscriptionStore>((set) => ({
    isLoading: false,
    text: "",
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
