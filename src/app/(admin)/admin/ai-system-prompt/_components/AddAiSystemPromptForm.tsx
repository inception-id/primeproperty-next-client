"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { createAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";
import { useAiSystemPromptStore } from "@/app/(admin)/admin/ai-system-prompt/_lib/store";
import { useShallow } from "zustand/react/shallow";
import { LuLoader } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const AddAiSystemPromptForm = () => {
  const router = useRouter();
  const { updateStore, isLoading } = useAiSystemPromptStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    updateStore("isLoading", true);
    const product_name = formData.get("product_name") as string;
    const prompt = formData.get("prompt") as string;
    const name = formData.get("name") as string;

    try {
      const systemPrompt = await createAiSystemPrompt(
        product_name,
        prompt,
        name,
      );
      updateStore("openAddDialog", false);
      toast.success(systemPrompt.message);
      router.refresh();
      return;
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      updateStore("isLoading", false);
    }
  };

  return (
    <form action={handleAction}>
      <Label htmlFor="product_name">Product name</Label>
      <Input
        id="product_name"
        type="text"
        name="product_name"
        required
        className="mb-4"
      />

      <Label htmlFor="name">Prompt name</Label>
      <Input id="name" type="text" name="name" required className="mb-4" />

      <Label htmlFor="prompt">System prompt</Label>
      <Textarea id="prompt" name="prompt" required className="mb-4 max-h-96" />

      <Button type="submit">
        {isLoading ? <LuLoader className="animate-spin" /> : "Add"}
      </Button>
    </form>
  );
};

export default AddAiSystemPromptForm;
