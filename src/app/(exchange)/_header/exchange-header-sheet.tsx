"use client";
import dynamic from "next/dynamic";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TypographyLead } from "@/components/ui/typography/lead";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TbMenu, TbX } from "react-icons/tb";

const ThemeButton = dynamic(
  () => import("../../(inception)/_components/ThemeButton"),
  { ssr: false },
);

const ExchangeHeaderSheet = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      >
        <TbMenu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <SheetClose
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <TbX />
            </SheetClose>
            <SheetTitle className="font-normal">
              <TypographyLead>Inception IDX</TypographyLead>
            </SheetTitle>
          </div>
          <ThemeButton />
        </div>

        <div>
          <Link
            href="/exchange/api"
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full justify-start",
            )}
          >
            API Service
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ExchangeHeaderSheet;
