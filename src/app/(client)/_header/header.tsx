"use client";
import { LogoLink } from "./logo-link";
import { Navigation } from "./navigation";
import { HeaderSheet } from "./sheet";
import ThemeButton from "./theme-button";

export const Header = () => {
  return (
    <div className="flex items-center justify-between container mx-auto p-2">
      <LogoLink />
      <HeaderSheet />
      <div className="hidden lg:flex items-center gap-2">
        <Navigation />
        <ThemeButton />
      </div>
    </div>
  );
};
