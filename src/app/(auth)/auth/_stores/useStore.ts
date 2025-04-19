import { create } from "zustand";

type Store = {
  isLoading: boolean;
  setLoading: () => void;
};

export const useStore = create<Store>((set) => ({
  isLoading: false,
  setLoading: () => set((state: any) => ({ isLoading: !state.isLoading })),
}));
