"use client";
import { LogoLink } from "./logo-link";
import { HeaderSheet } from "./sheet";
import ThemeButton from "./theme-button";

export const Header = () => {
  return (
    <nav className="p-2">
      <div className="flex items-center justify-between container mx-auto">
        <LogoLink />
        <HeaderSheet />
        <div className="hidden md:block">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};
