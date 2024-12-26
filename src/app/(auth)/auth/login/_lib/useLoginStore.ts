import { create } from "zustand";

type TUseLoginStore = {
  openLoginDialog: boolean;
  updateStore: (key: keyof TUseLoginStore, value: any) => void;
};

export const useLoginStore = create<TUseLoginStore>((set) => ({
  openLoginDialog: false,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
