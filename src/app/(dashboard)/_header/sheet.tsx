"use client";
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
import Link from "next/link";
import { useState } from "react";
import { LuPanelRight, LuX } from "react-icons/lu";
import { SidebarFooter, SidebarMenu } from "../_sidebar";

export const HeaderSheet = () => {
  const [open, setOpen] = useState(false);
  const iconClassname = buttonVariants({ variant: "ghost", size: "icon" });
  const onLinkClick = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open}>
      <SheetTrigger className={cn(iconClassname)} onClick={() => setOpen(true)}>
        <LuPanelRight className="size-6" />
      </SheetTrigger>
      <SheetContent className="p-0 flex flex-col gap-2">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "link" }), "px-3")}
                onClick={onLinkClick}
              >
                Primepro
              </Link>
            </SheetTitle>
            <SheetClose
              className={cn(iconClassname)}
              onClick={() => setOpen(false)}
            >
              <LuX className="size-6" />
            </SheetClose>
          </div>
        </SheetHeader>
        <SidebarMenu onLinkClick={() => setOpen(false)} />
        <SheetFooter>
          <SidebarFooter />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
