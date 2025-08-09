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
import { TbMenuDeep } from "react-icons/tb";

export const HeaderSheet = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open}>
      <SheetTrigger
        aria-label="Menu"
        title="Menu"
        onClick={() => setOpen(true)}
        className={cn(
          buttonVariants({ variant: "link", size: "icon" }),
          "md:hidden",
        )}
      >
        <TbMenuDeep />
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
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "text-muted-foreground",
            )}
          >
            <LuX />
          </SheetClose>
        </div>
        <NavLinks onClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};
