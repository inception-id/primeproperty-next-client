"use client";
import { toast } from "react-toastify";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import CheckbotInstructionSelection from "@/app/(languageai)/languageai/checkbot/_components/checkbot-instruction-select";
import { useCheckbotStore } from "@/app/(languageai)/languageai/checkbot/_lib/useCheckbotStore";
import {
  createCheckbot,
  TCreateCheckbotPayload,
} from "@/lib/api/checkbot/createCheckbot";
import CheckbotTextarea from "@/app/(languageai)/languageai/checkbot/_components/checkbot-textarea";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { checkLanguageaiSubscriptionExceedLimit } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-exceed-limit";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import CheckbotSubmitBtn from "./checkbot-submit-btn";
import CheckbotTemperatureSelect from "./checkbot-temperature-select";
import { TOpenAiCompletionChunk } from "@/app/api/openai/route";

const CheckbotForm = () => {
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

  const { instructions, updateStore } = useCheckbotStore(
    useShallow((state) => ({
      instructions: state.instructions,
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const content = formData.get("checkbot_content") as string;
    const instructionId = formData.get("instruction_id") as string;
    const temperature = formData.get("temperature") as string;

    if (!content) {
      toast.error("Please enter your text");
      return;
    }

    if (!instructionId) {
      toast.error("Please select instruction");
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
        ELanguageaSubscriptionLimit.Checkbot,
      );

      if (passLimit.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      if (passLimit.data) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Checkbot,
        );
        return;
      }

      updateStore("loadingText", "Processing...");

      const selectedInstruction = instructions.find(
        (instruction) => String(instruction.id) === instructionId,
      );
      const response = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({
          temperature: Number(temperature),
          messages: [
            { role: "system", content: selectedInstruction?.prompt },
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
            const payload: TCreateCheckbotPayload = {
              ai_system_prompt: String(selectedInstruction?.prompt),
              instruction: String(selectedInstruction?.name),
              content,
              completion: updatedCompletion,
              input_tokens,
              output_tokens,
              total_tokens,
              temperature: Number(temperature),
            };
            const checkbot = await createCheckbot(payload);
            if (checkbot.data.id) {
              updateStore("checkbotId", checkbot.data.id);
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
      console.error(e);
      toast.error("Something went wrong, please try again");
    } finally {
      updateStore("loadingText", "");
    }
  };
  return (
    <form action={handleAction} className="flex flex-col gap-2 flex-1">
      <CheckbotTextarea />
      <CheckbotInstructionSelection />
      <div className="flex items-center justify-between">
        <CheckbotTemperatureSelect />
        <CheckbotSubmitBtn />
      </div>
    </form>
  );
};

export default CheckbotForm;
