import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const DeveloperApiKey = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <div className="min-w-20">API Key:</div>

      <Dialog>
        <DialogTrigger className={cn(buttonVariants(), "w-fit")}>
          Create New API Key
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="font-bold">Create New API Key</DialogTitle>
          <DialogDescription className="mb-4">
            This will make your old API Key obsolete, are you sure?
          </DialogDescription>

          <div className="grid grid-cols-2 gap-4">
            <Button>Yes, create</Button>
            <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
              No, cancel
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
