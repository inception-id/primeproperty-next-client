import { create } from "zustand";
import {ELanguageaSubscriptionLimit} from "@/lib/enums/languageai-subscription-limit";

type TUseLanguageaiSubscriptionStore = {
    limitDialog: null | ELanguageaSubscriptionLimit
    updateStore: (key: keyof TUseLanguageaiSubscriptionStore, value: any) => void;
};

export const useLanguageaiSubscriptionStore = create<TUseLanguageaiSubscriptionStore>((set) => ({
    limitDialog: null,
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
