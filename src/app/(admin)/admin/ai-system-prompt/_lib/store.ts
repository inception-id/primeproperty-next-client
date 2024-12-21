import { create } from "zustand";

type TUseAiSystemPromptStore = {
  isLoading: boolean;
  openAddDialog: boolean;
  updateStore: (key: keyof TUseAiSystemPromptStore, value: any) => void;
};

export const useAiSystemPromptStore = create<TUseAiSystemPromptStore>(
  (set) => ({
    isLoading: false,
    openAddDialog: false,
    updateStore: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
  }),
);
