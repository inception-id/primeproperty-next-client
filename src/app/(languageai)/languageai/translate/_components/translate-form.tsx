"use client";
import TranslateLanguageSelection from "@/app/(languageai)/languageai/translate/_components/translate-language-selection";
import { toast } from "react-toastify";
import { createTranslateSystemPrompt } from "@/app/(languageai)/languageai/translate/_lib/createTranslateSystemPrompt";
import {
  createTranslation,
  TCreateTranslationPayload,
} from "@/lib/api/translation/createTranslation";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import TranslateTextarea from "@/app/(languageai)/languageai/translate/_components/translate-textarea";
import { useTranslationStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import { checkLanguageaiSubscriptionExceedLimit } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-exceed-limit";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import TranslateSubmitBtn from "./translate-submit-btn";
import { TOpenAiCompletionChunk } from "@/app/api/openai/route";

const TranslateForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
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

    updateStore("loadingText", "Checking your session...");
    try {
      const token = await fetchCookieToken();
      if (!token) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      const passLimit = await checkLanguageaiSubscriptionExceedLimit(
        ELanguageaSubscriptionLimit.Translation,
      );
      if (passLimit.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      if (passLimit.data) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Translation,
        );
        return;
      }

      updateStore("loadingText", "Translating...");
      const aiSystemPrompt = createTranslateSystemPrompt(
        content_language,
        target_language,
      );
      const response = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({
          messages: [
            { role: "system", content: aiSystemPrompt },
            { role: "user", content },
          ],
        }),
      });
      const reader = response?.body?.getReader();
      const decoder = new TextDecoder();

      let updatedCompletion = "";
      let input_tokens = 0;
      let output_tokens = 0;
      let total_tokens = 0;
      if (reader) {
        while (true) {
          const { done, value } = await reader?.read();
          if (done) {
            const payload: TCreateTranslationPayload = {
              ai_system_prompt: aiSystemPrompt,
              content_language,
              target_language,
              content,
              completion: updatedCompletion,
              input_tokens,
              output_tokens,
              total_tokens,
              temperature: 0,
            };
            const translation = await createTranslation(payload);
            console.log(translation);
            if (translation.data.id) {
              updateStore("translationId", translation.data.id);
            }
            break;
          }

          const lines = decoder.decode(value).trim().split("\n");
          lines.forEach((line) => {
            if (line) {
              const chunk: TOpenAiCompletionChunk = JSON.parse(line);
              if (
                chunk.choices.length > 0 &&
                chunk.choices[0]?.delta?.content
              ) {
                updatedCompletion += chunk.choices[0].delta.content;
                updateStore("updatedCompletion", updatedCompletion);
              }
              if (chunk.usage) {
                input_tokens = chunk.usage.prompt_tokens;
                output_tokens = chunk.usage.completion_tokens;
                total_tokens = chunk.usage.total_tokens;
              }
            }
          });
        }
      }
      return;
    } catch (e: any) {
      console.error(e.message);
      toast.error("Something went wrong, please try again");
    } finally {
      updateStore("loadingText", "");
    }
  };
  return (
    <form
      action={handleAction}
      className="flex flex-col gap-2 flex-auto md:flex-1"
    >
      <TranslateTextarea />
      <TranslateLanguageSelection />
      <TranslateSubmitBtn />
    </form>
  );
};

export default TranslateForm;
