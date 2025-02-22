import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuSave, LuX } from "react-icons/lu";
import { Textarea } from "@/components/ui/textarea";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateTranslationStorage } from "@/lib/api/translation/update-translation-storage";
import { toast } from "react-toastify";

type TranslateStorageUpdateFormProps = Omit<
  TTranslationStorage,
  "user_id" | "translation_id" | "created_at" | "updated_at"
> & {
  onCloseClick: () => void;
};

const TranslateStorageUpdateForm = ({
  id,
  title,
  content_language,
  content,
  target_language,
  updated_completion,
  onCloseClick,
}: TranslateStorageUpdateFormProps) => {
  const router = useRouter();
  const handleAction = async (formData: FormData) => {
    try {
      const title = formData.get("title") as string;
      const updated_completion = formData.get("updated_completion") as string;
      const translationStorage = await updateTranslationStorage(id, {
        title,
        updated_completion,
      });
      if (translationStorage.data.id) {
        toast.success("Translation updated");
        onCloseClick();
        router.refresh();
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Fail to save, please try again");
    }
  };
  return (
    <form action={handleAction}>
      <div className="flex items-center justify-between mb-4">
        <DialogTitle className="font-semibold">Update Translation</DialogTitle>
        <DialogClose
          onClick={onCloseClick}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <LuX />{" "}
        </DialogClose>
      </div>
      <Label htmlFor="title" className="opacity-75">
        Translation title
      </Label>
      <Input
        id="title"
        name="title"
        defaultValue={title || ""}
        placeholder="No title"
        className="mb-4"
      />
      <div className="text-sm mb-2 capitalize opacity-75">
        {content_language || "Original text"}
      </div>
      <div className="text-sm mb-4 h-48 overflow-y-auto whitespace-pre-line">
        {content}
      </div>
      <div className="text-sm mb-2 capitalize opacity-75">
        {target_language}
      </div>
      <Textarea
        autoFocus
        name="updated_completion"
        className="h-48 resize-none mb-4"
        defaultValue={updated_completion}
      />
      <div className="flex items-center justify-end">
        <Button type="submit">
          <LuSave /> Save{" "}
        </Button>
      </div>
    </form>
  );
};

export default TranslateStorageUpdateForm;
