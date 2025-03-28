import { create } from "zustand";

type TUseDeveloperApiKeyStore = {
  openDialog: boolean;
  apiKey: string;
  updateStore: (key: keyof TUseDeveloperApiKeyStore, value: any) => void;
};

export const useDeveloperApiKeyStore = create<TUseDeveloperApiKeyStore>(
  (set) => ({
    openDialog: false,
    apiKey: "",
    updateStore: (key, value) => set({ [key]: value }),
  }),
);
