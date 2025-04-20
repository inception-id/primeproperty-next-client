import { create } from "zustand";

type Store = {
  loadingText: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  setStore: (key: keyof Store, value: string) => void;
  resetStore: () => void;
};

export const useStore = create<Store>((set) => ({
  loadingText: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  setStore: (key: keyof Store, value: string) => set(() => ({ [key]: value })),
  resetStore: () => set(() => ({ fullName: "", email: "", phoneNumber: "" })),
}));
