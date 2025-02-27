import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMenu, TbX } from "react-icons/tb";

const TarsHeaderDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "ghost" }), "gap-2")}
      >
        <TbMenu className="text-2xl" />
        <div className="hidden md:flex">TARS</div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between mb-2">
          <DialogTitle>Menu</DialogTitle>
          <DialogClose
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <TbX />
          </DialogClose>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="/tars"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "w-full justify-start",
            )}
          >
            TARS
          </Link>
          <Link
            href="/languageai"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start",
            )}
          >
            Language AI
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start",
            )}
          >
            Inception
          </Link>
          <Link
            href="/account"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start",
            )}
          >
            Account
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TarsHeaderDialog;
