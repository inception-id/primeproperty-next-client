"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogoLink } from "./logo-link";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import { NavLinks } from "./nav-links";

export const HeaderSheet = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className={cn(buttonVariants({ variant: "link" }), "md:hidden")}
      >
        Menu
      </SheetTrigger>
      <SheetContent
        className="p-0 flex flex-col"
        onOverlayClick={() => setOpen(false)}
      >
        <div className="flex items-center justify-between">
          <SheetTitle>
            <LogoLink onClick={() => setOpen(false)} />
          </SheetTitle>
          <SheetClose
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <LuX />
          </SheetClose>
        </div>
        <NavLinks onClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};
