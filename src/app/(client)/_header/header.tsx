"use client";
import { LogoLink } from "./logo-link";
import { HeaderSheet } from "./sheet";
import { NavLinks } from "./nav-links";

export const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-between container mx-auto py-2">
        <LogoLink />
        <HeaderSheet />
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};
