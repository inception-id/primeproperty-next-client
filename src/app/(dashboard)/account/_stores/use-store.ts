import { create } from "zustand";

type Store = {
  loadingText: string;
  setStore: (key: keyof Store, value: string) => void;
};

export const useStore = create<Store>((set) => ({
  loadingText: "",
  setStore: (key: keyof Store, value: string) => set(() => ({ [key]: value })),
}));
