"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { LuLoader } from "react-icons/lu";
import { toast } from "react-toastify";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { CheckbotContext } from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";
import CheckbotInstructionSelection from "@/app/(languageai)/languageai/checkbot/_components/checkbot-instruction-select";

const CheckbotForm = () => {
  const { complete, isLoading, completion } =
    useContext<UseCompletionHelpers>(CheckbotContext);

  const { updateStore } = useLoginStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const content = formData.get("checkbot_content") as string;
    const aiSystemPrompt = formData.get("ai_system_prompt") as string;

    if (!content) {
      toast.error("Please enter your text");
      return;
    }

    if (!aiSystemPrompt) {
      toast.error("Please select instruction");
      return;
    }

    try {
      const token = await fetchCookieToken();
      if (!token) {
        updateStore("openLoginDialog", true);
        return;
      }

      await complete(content, {
        body: {
          system: aiSystemPrompt,
        },
      });
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, please try again");
    } finally {
      // no need to handle if error
      // if (completion) {
      //   const createTranslationPayload = {
      //     ai_system_prompt: ai_system_prompt,
      //     content_language,
      //     target_language,
      //     content,
      //     completion,
      //     updated_completion: completion,
      //   };
      //
      //   await createTranslation(createTranslationPayload);
      // }
    }
  };
  return (
    <form action={handleAction} className="flex flex-col">
      <Textarea
        autoFocus
        name="checkbot_content"
        placeholder="Enter text"
        className="focus-visible:ring-0 focus-visible:ring-offset-0 h-96 lg:h-[90vh] lg:flex-1 resize-none"
      />
      <CheckbotInstructionSelection />
      <div className="flex justify-end pr-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LuLoader className="animate-spin" /> : "Check"}
        </Button>
      </div>
    </form>
  );
};

export default CheckbotForm;
