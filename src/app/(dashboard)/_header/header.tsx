"use client";
import Link from "next/link";
import { HeaderSheet } from "./sheet";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSidebarStore } from "../_sidebar";
import { LuPanelLeft } from "react-icons/lu";
import { HeaderBreadcrumb } from "./breadcrumb";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(() => import("./theme-button"), { ssr: false });

const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between border-b md:hidden">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "link" }), "px-3")}
      >
        Primepro
      </Link>
      <HeaderSheet />
    </div>
  );
};

const DesktopHeader = () => {
  const { isMinimized, setMinimized } = useSidebarStore();
  return (
    <div className="hidden md:flex items-center border-b p-1 justify-between">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMinimized(!isMinimized)}
        >
          <LuPanelLeft />
        </Button>
        <div className="bg-foreground/75 w-[1px] h-4" />
        <HeaderBreadcrumb />
      </div>
      <ThemeButton />
    </div>
  );
};

export const Header = () => {
  return (
    <nav className="">
      <MobileHeader />
      <DesktopHeader />
    </nav>
  );
};
