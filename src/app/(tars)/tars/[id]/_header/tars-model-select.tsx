"use client";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { createTarsChatRoom } from "@/app/(tars)/_server/create-tars-chat-room";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { findAllAiModels } from "@/lib/api/ai-models/find-all-ai-models";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";

type TarsModelSelectProps = {
  className?: string;
  defaultModelId: number | null;
};

const TarsModelSelect = ({
  className,
  defaultModelId,
}: TarsModelSelectProps) => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["tars-model-select"],
    queryFn: async () => await findAllAiModels(),
  });

  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const handleValueChange = async (value: string) => {
    try {
      const newChat = await createTarsChatRoom({
        room: {
          ai_model_id: Number(value),
          title: "",
        },
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
        ],
      });
      if (newChat.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }
      router.push(`/tars/${newChat.data.id}`);
      return newChat;
    } catch (error) {
      console.error(error);
      toast.error("Fail to create chat, please try again later");
    }
  };

  const placeholder = useMemo(() => {
    if (defaultModelId && data && data?.data?.length > 0) {
      return (
        data.data.find((model) => model.id === defaultModelId)?.label ||
        "Select AI model"
      );
    }
    return "Select AI model";
  }, [defaultModelId, data]);

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data && data.data.length > 0 ? (
          data.data.map((model) => (
            <SelectItem key={model.value} value={String(model.id)}>
              {model.label}
            </SelectItem>
          ))
        ) : (
          <SelectItem value={String(0)} className="animate-pulse">
            Loading models...
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
};

export default TarsModelSelect;
