import { create } from "zustand";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";

type TUseCheckbotStore = {
  checkbotId: number;
  updatedCompletion: string;
  instructions: TAiSystemPrompt[];
  updateStore: (key: keyof TUseCheckbotStore, value: any) => void;
};

export const useCheckbotStore = create<TUseCheckbotStore>((set) => ({
  checkbotId: 0,
  updatedCompletion: "",
  instructions: [],
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
