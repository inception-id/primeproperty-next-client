"use client";
import Link from "next/link";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarStore } from "./_lib/store";
import { useShallow } from "zustand/react/shallow";
import { LogoutButton } from "./sidebar-logout";
import Image from "next/image";

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
    <div className="hidden md:flex flex-col h-full border-r gap-2">
      <Link href="/" className="py-2 px-3 flex items-center gap-2">
        <Image
          src="/images/primepro.png"
          alt="Primepro"
          width={25}
          height={25}
        />
        <span className="text-xs">Primepro Indonesia</span>
      </Link>
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
};
