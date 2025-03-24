"use client";
import { buttonVariants } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typography/large";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const ThemeButton = dynamic(
  () => import("../../../(inception)/_components/ThemeButton"),
  { ssr: false },
);

export const HeaderDesktop = () => {
  return (
    <div className="container mx-auto items-center justify-between hidden md:flex">
      <Link href="/exchange/api">
        <TypographyLarge>IDX API</TypographyLarge>
      </Link>

      <div className="flex items-center gap-2">
        <Link
          href="/exchange/api"
          className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        >
          Documentation
        </Link>
        <Link
          href="/exchange/api/developer"
          className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        >
          Developer
        </Link>
        <Link
          href="/support"
          className={cn(buttonVariants({ variant: "link" }), "justify-between")}
        >
          Support
        </Link>
        <ThemeButton />
      </div>
    </div>
  );
};
