"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";
import { LuLoader } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/app/(admin)/admin/language/_lib/store";
import {updateLanguage} from "@/lib/api/languages/updateLanguage";

const UpdateLanguageForm = () => {
  const router = useRouter();
  const { updateStore, isLoading, updateTarget } = useLanguageStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
        updateTarget: state.updateTarget
    })),
  );

  const handleAction = async (formData: FormData) => {
    updateStore("isLoading", true);
    const title = formData.get("title") as string;
    const iso_639_1 = formData.get("iso_code") as string;

    try {
      const language = await updateLanguage(Number(updateTarget?.id), {title, iso_639_1});
      updateStore("openUpdateDialog", false);
      toast.success(language.message);
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
      <Label htmlFor="title">Title</Label>
      <Input id="title" type="text" name="title" required className="mb-4" defaultValue={updateTarget?.title} />

      <Label htmlFor="iso_code">ISO 639 Code</Label>
      <Input
        id="iso_code"
        type="text"
        name="iso_code"
        required
        className="mb-4"
        maxLength={2}
        defaultValue={updateTarget?.iso_639_1}
      />

      <Button type="submit">
        {isLoading ? <LuLoader className="animate-spin" /> : "Update"}
      </Button>
    </form>
  );
};

export default UpdateLanguageForm;
