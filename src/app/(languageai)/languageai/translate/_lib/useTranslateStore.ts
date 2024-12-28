import { create } from "zustand";
import { TCreateTranslationPayload } from "@/lib/api/translation/createTranslation";

type TUseTranslateStore = {
  translationId: string;
  aiSystemPrompt: string;
  contentLanguage: string;
  targetLanguage: string;
  content: string;
  completion: string;
  updatedCompletion: string;
  updateStore: (key: keyof TUseTranslateStore, value: any) => void;
  updateCreateTranslationStore: (payload: TCreateTranslationPayload) => void;
};

export const useTranslateStore = create<TUseTranslateStore>((set) => ({
  translationId: "",
  aiSystemPrompt: "",
  contentLanguage: "",
  targetLanguage: "",
  content: "",
  completion: "",
  updatedCompletion: "",
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  updateCreateTranslationStore: (payload: TCreateTranslationPayload) =>
    set((state) => ({
      ...state,
      aiSystemPrompt: payload.ai_system_prompt,
      contentLanguage: payload.content_language,
      targetLanguage: payload.target_language,
      content: payload.content,
      completion: payload.completion,
      updatedCompletion: payload.completion,
    })),
}));
