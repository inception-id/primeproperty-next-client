import { create } from "zustand";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";

type TUseAiSystemPromptStore = {
  isLoading: boolean;
  openAddDialog: boolean;
  openUpdateDialog: boolean;
  updateTarget: TAiSystemPrompt | null;
  updateStore: (key: keyof TUseAiSystemPromptStore, value: any) => void;
};

export const useAiSystemPromptStore = create<TUseAiSystemPromptStore>(
  (set) => ({
    isLoading: false,
    openAddDialog: false,
    openUpdateDialog: false,
    updateTarget: null,
    updateStore: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
  }),
);
