"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LuMenu, LuX } from "react-icons/lu";
import LanguageaiSidebarMenu from "../_sidebar/languageai-sidebar-menu";
import { useState } from "react";
const ThemeButton = dynamic(
  () => import("../../(inception)/_components/ThemeButton"),
  { ssr: false },
);

const LanguageaiHeaderSheet = () => {
  const [openSheet, setOpenSheet] = useState(false);
  return (
    <Sheet open={openSheet}>
      <SheetTrigger
        onClick={() => setOpenSheet(true)}
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      >
        <LuMenu />
      </SheetTrigger>
      <SheetContent
        className="p-0 flex flex-col pb-2 gap-0"
        side="right"
        onOverlayClick={() => setOpenSheet(false)}
      >
        <div className="flex items-center justify-between">
          <SheetTitle className="px-2 py-1 text-sm font-normal">
            LANGUAGE AI
          </SheetTitle>
          <SheetClose
            onClick={() => setOpenSheet(false)}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <LuX />
          </SheetClose>
        </div>
        <LanguageaiSidebarMenu onMenuClick={() => setOpenSheet(false)} />

        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <Image
              src="/images/inception.png"
              alt="Inception"
              width={15}
              height={15}
            />
          </Link>
          <ThemeButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LanguageaiHeaderSheet;
