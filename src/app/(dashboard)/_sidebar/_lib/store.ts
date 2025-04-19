import { create } from "zustand";

type Store = {
  isMinimized: boolean;
  setMinimized: (minimize: boolean) => void;
};

export const useSidebarStore = create<Store>((set) => ({
  isMinimized: false,
  setMinimized: (minimize: boolean) => set(() => ({ isMinimized: minimize })),
}));
