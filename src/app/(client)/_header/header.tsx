"use client";
import { LogoLink } from "./logo-link";
import { HeaderSheet } from "./sheet";
import { NavLinks } from "./nav-links";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <nav
      className={cn("flex items-center justify-between container mx-auto p-2")}
    >
      <LogoLink />
      <HeaderSheet />
      <div className="hidden md:block">
        <NavLinks />
      </div>
    </nav>
  );
};
