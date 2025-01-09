import {create} from "zustand";

type TUseTranslationStore = {
    translationId: string;
    updatedCompletion: string;
    updateStore: (key: keyof TUseTranslationStore, value: any) => void;
};

export const useTranslationStore = create<TUseTranslationStore>((set) => ({
    translationId: "",
    updatedCompletion: "",
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
