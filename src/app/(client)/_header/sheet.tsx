"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogoLink } from "./logo-link";
import { LuChevronRight, LuX } from "react-icons/lu";
import { useRef } from "react";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FOR_RENT_PROPERTIES,
  FOR_SALE_PROPERTIES,
  PROPERTIES_TYPES,
} from "./_lib/constant";
import ThemeButton from "./theme-button";

type SheetMenuProps = {
  onClick: () => void;
};

const SheetMenu = ({ onClick }: SheetMenuProps) => {
  return (
    <div className="flex flex-col">
      <Link
        className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        href="/"
        onClick={onClick}
        title="PrimePro Indonesia Home"
      >
        Beranda
        <LuChevronRight />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        href="/properties"
        onClick={onClick}
        title="PrimePro Indonesia Properties"
      >
        Properti (Semua)
        <LuChevronRight />
      </Link>

      <Accordion type="single" collapsible>
        <AccordionItem value="dijual" className="border-b-0">
          <AccordionTrigger
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
          >
            Properti (Dijual)
          </AccordionTrigger>
          <AccordionContent className="pl-2">
            {FOR_SALE_PROPERTIES.map((property) => (
              <Link
                key={property.key}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-between ",
                )}
                href={property.value}
                onClick={onClick}
                title={property.key}
              >
                {property.key}
                <LuChevronRight />
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="disewa" className="border-b-0">
          <AccordionTrigger
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
          >
            Properti (Disewa)
          </AccordionTrigger>
          <AccordionContent className="pl-2">
            {FOR_RENT_PROPERTIES.map((property) => (
              <Link
                key={property.key}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-between ",
                )}
                href={property.value}
                onClick={onClick}
                title={property.key}
              >
                {property.key}
                <LuChevronRight />
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="jenis" className="border-b-0">
          <AccordionTrigger
            className={cn(
              buttonVariants({ variant: "link" }),
              "justify-between",
            )}
          >
            Tipe Properti
          </AccordionTrigger>
          <AccordionContent className="pl-2">
            {PROPERTIES_TYPES.map((property) => (
              <Link
                key={property.key}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "w-full justify-start",
                )}
                href={property.value}
                onClick={onClick}
                title={property.key}
              >
                {property.key}
                <LuChevronRight />
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link
        className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        href="/agents"
        onClick={onClick}
        title="PrimePro Indonesia Agents"
      >
        Agen
        <LuChevronRight />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        href="/blog"
        onClick={onClick}
        title="PrimePro Indonesia Blog"
      >
        Blog
        <LuChevronRight />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        href="/franchise"
        onClick={onClick}
        title="PrimePro Indonesia Franchise"
      >
        Franchise
        <LuChevronRight />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        href="/about"
        onClick={onClick}
        title="PrimePro Indonesia Franchise"
      >
        Tentang
        <LuChevronRight />
      </Link>
    </div>
  );
};

export const HeaderSheet = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeSheet = () => {
    closeRef.current?.click();
  };
  return (
    <Sheet>
      <SheetTrigger
        aria-label="PrimePro Menu"
        title="PrimePro Menu"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "md:hidden",
        )}
      >
        <TbMenuDeep />
      </SheetTrigger>
      <SheetContent className="p-2" side="top">
        <SheetHeader className="flex-row items-center w-full justify-between space-y-0">
          <SheetTitle className="font-normal">
            <LogoLink onClick={closeSheet} />
          </SheetTitle>
          <SheetClose
            ref={closeRef}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            <LuX />
          </SheetClose>
        </SheetHeader>
        <SheetDescription className="my-2 pb-2 border-b border-b-primary">
          Menu
        </SheetDescription>
        <SheetMenu onClick={closeSheet} />
        <SheetFooter className="mt-4 flex-row items-center justify-between w-full px-1">
          <span className="text-xs text-muted-foreground">
            PrimePro Indonesia {new Date().getFullYear()}
          </span>
          <ThemeButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
