"use client";
import { Button } from "@/components/ui/button";
import TranslateLanguageSelection from "@/app/(languageai)/languageai/translate/_components/translate-language-selection";
import { useContext } from "react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { LuLoader } from "react-icons/lu";
import { toast } from "react-toastify";
import { createTranslateSystemPrompt } from "@/app/(languageai)/languageai/translate/_lib/createTranslateSystemPrompt";
import { createTranslation } from "@/lib/api/translation/createTranslation";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import TranslateTextarea from "@/app/(languageai)/languageai/translate/_components/translate-textarea";
import { useTranslationStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";

const TranslateForm = () => {
  const { complete, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);

  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );
  const { updateStore } = useTranslationStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const content = formData.get("translate_content") as string;
    const content_language = formData.get("content_language") as string;
    const target_language = formData.get("target_language") as string;

    if (!content) {
      toast.error("Please enter your text");
      return;
    }

    if (!target_language) {
      toast.error("Please enter target language");
      return;
    }

    const ai_system_prompt = createTranslateSystemPrompt(
      content_language,
      target_language,
    );

    try {
      const token = await fetchCookieToken();
      if (!token) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      updateStore("updatedCompletion", "");
      const completion = await complete(content, {
        body: {
          system: ai_system_prompt,
        },
      });
      if (completion) {
        const createTranslationPayload = {
          ai_system_prompt,
          content_language,
          target_language,
          content,
          completion,
        };

        const translation = await createTranslation(createTranslationPayload);
        updateStore("translationId", translation.data.id);
        updateStore("updatedCompletion", translation.data.completion);
      } else {
        toast.error("Something went wrong, please try again");
      }
      return;
    } catch (e: any) {
      console.error(e.message);
    }
  };
  return (
    <form action={handleAction} className="flex flex-col">
      <TranslateTextarea />
      <TranslateLanguageSelection />
      <div className="flex justify-end pr-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LuLoader className="animate-spin" /> : "Translate"}
        </Button>
      </div>
    </form>
  );
};

export default TranslateForm;
