import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { TbBallpen, TbX } from "react-icons/tb";

const TarsCreateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "font-semibold",
        )}
      >
        <TbBallpen />
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between">
          <DialogTitle>New Chat</DialogTitle>
          <DialogClose
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <TbX />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TarsCreateDialog;
