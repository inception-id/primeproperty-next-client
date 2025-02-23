import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuSave, LuX } from "react-icons/lu";
import { Textarea } from "@/components/ui/textarea";
import { Row } from "@tanstack/table-core";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import { updateCheckbotStorage } from "@/lib/api/checkbot/update-checkbot-storage";

type CheckbotStorageUpdateFormProps = {
  row: Row<TCheckbotStorage>;
  onCloseClick: () => void;
};

const CheckbotStorageUpdateForm = ({
  onCloseClick,
  row,
}: CheckbotStorageUpdateFormProps) => {
  const router = useRouter();
  const handleAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const updated_completion = formData.get("updated_completion") as string;
    try {
      const checkbotStorage = await updateCheckbotStorage(row.original.id, {
        title,
        updated_completion,
      });
      if (checkbotStorage.data.id) {
        toast.success("Checkbot updated");
        router.refresh();
        onCloseClick();
      }
      return;
    } catch (error: any) {
      console.error(error.message);
      toast.error("Fail to save, please try again");
    }
  };
  return (
    <form action={handleAction}>
      <div className="flex items-center justify-between mb-4">
        <DialogTitle className="font-semibold">
          Update Checkbot Result
        </DialogTitle>
        <DialogClose
          onClick={onCloseClick}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <LuX />{" "}
        </DialogClose>
      </div>
      <Label htmlFor="title" className="opacity-75">
        Title
      </Label>
      <Input
        id="title"
        name="title"
        defaultValue={row.original.title || ""}
        placeholder="No title"
        className="mb-4"
      />
      <div className="text-sm mb-2 capitalize opacity-75">
        {row.original.instruction}
      </div>
      <div className="text-sm mb-4 h-40 overflow-y-auto">
        {row.original.content}
      </div>
      <div className="text-sm mb-2 capitalize opacity-75">Checkbot result</div>
      <Textarea
        autoFocus
        name="updated_completion"
        className="h-40 overflow-y-auto resize-none mb-4"
        defaultValue={row.original.updated_completion}
      />
      <div className="flex items-center justify-end">
        <Button type="submit">
          <LuSave /> Save{" "}
        </Button>
      </div>
    </form>
  );
};

export default CheckbotStorageUpdateForm;
