"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import TranslateLanguageSelection from "@/app/(languageai)/languageai/translate/_components/translate-language-selection";
import { useContext } from "react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { LuLoader } from "react-icons/lu";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { findAllAiSystemPrompt } from "@/lib/api/ai-system-prompt/findAllAiSystemPrompt";
import { createTranslateSystemPrompt } from "@/app/(languageai)/languageai/translate/_lib/createTranslateSystemPrompt";

const TranslateForm = () => {
  const { complete, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);
  const handleAction = async (formData: FormData) => {
    const translateContent = formData.get("translate_content") as string;
    const contentLanguage = formData.get("content_language") as string;
    const targetLanguage = formData.get("target_language") as string;

    try {
      await complete(translateContent, {
        body: {
          system: createTranslateSystemPrompt(contentLanguage, targetLanguage),
        },
      });
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, please try again");
    }
  };
  return (
    <form action={handleAction} className="flex flex-col">
      <Textarea
        name="translate_content"
        placeholder="Enter text"
        className="focus-visible:ring-0 focus-visible:ring-offset-0 h-96 lg:h-[90vh] lg:flex-1 resize-none"
      />
      <TranslateLanguageSelection />
      <div className="flex justify-end pr-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LuLoader className="animate-spin" /> : "Translate"}
        </Button>
      </div>
    </form>
  );
};

export default TranslateForm;
