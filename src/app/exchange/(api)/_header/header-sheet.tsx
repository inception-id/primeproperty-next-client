"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";
import dynamic from "next/dynamic";
import { useState } from "react";

const ThemeButton = dynamic(
  () => import("../../../(inception)/_components/ThemeButton"),
  { ssr: false },
);

export const HeaderSheet = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
      >
        <LuMenu />
      </SheetTrigger>
      <SheetContent
        className="p-0"
        side="left"
        onOverlayClick={() => setOpen(false)}
      >
        <div className="flex items-center justify-between">
          <SheetClose
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
          >
            <LuX />
          </SheetClose>
          <ThemeButton />
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/exchange/api"
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
            onClick={() => setOpen(false)}
          >
            API Home
            <LuArrowRight />
          </Link>
          <Link
            href="/exchange/api"
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
            onClick={() => setOpen(false)}
          >
            Documentation
            <LuArrowRight />
          </Link>
          <Link
            href="/exchange/api/developer"
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
            onClick={() => setOpen(false)}
          >
            Developer
            <LuArrowRight />
          </Link>
          <Link
            href="/support"
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
            onClick={() => setOpen(false)}
          >
            Support
            <LuArrowRight />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
