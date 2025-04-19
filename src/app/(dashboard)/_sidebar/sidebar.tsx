"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarStore } from "./_lib/store";
import { useShallow } from "zustand/react/shallow";
import { LogoutButton } from "./sidebar-logout";

export const Sidebar = () => {
  const isMinimized = useSidebarStore(useShallow((state) => state.isMinimized));

  if (isMinimized) {
    return (
      <div className="hidden md:flex flex-col items-center p-2 py-1 h-full border-r">
        <div className="flex-1">
          <SidebarMenu />
        </div>
        <LogoutButton />
      </div>
    );
  }

  return (
    <div className="hidden md:flex flex-col h-full border-r min-w-48">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "link" }), "justify-start")}
      >
        Primepro
      </Link>
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
};
