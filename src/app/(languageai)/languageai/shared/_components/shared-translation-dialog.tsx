import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuShare } from "react-icons/lu";

const SharedTranslationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <LuShare />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>hi</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default SharedTranslationDialog;
