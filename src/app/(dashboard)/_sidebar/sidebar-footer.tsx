"use client";
import { LogoutButton } from "./sidebar-logout";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(() => import("./theme-button"), { ssr: false });
export const SidebarFooter = () => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <ThemeButton />
      <LogoutButton />
    </div>
  );
};
