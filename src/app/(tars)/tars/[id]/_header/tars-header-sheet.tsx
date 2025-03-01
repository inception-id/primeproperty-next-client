"use client";
import dynamic from "next/dynamic";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { TbMenu } from "react-icons/tb";
import TarsSidebar from "../_components/tars-sidebar";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const TarsHeaderSheet = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "md:hidden",
        )}
      >
        <TbMenu />
      </SheetTrigger>
      <SheetContent side="left" className="p-1 pr-4">
        <SheetHeader className="flex-row items-center justify-between space-y-0">
          <SheetClose
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <TbMenu />
          </SheetClose>
          <SheetTitle>TARS</SheetTitle>
        </SheetHeader>
        <TarsSidebar />
        <SheetFooter>
          <ThemeButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default TarsHeaderSheet;
