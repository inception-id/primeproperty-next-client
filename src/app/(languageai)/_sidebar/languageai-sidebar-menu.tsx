"use client";
import { LANGUAGEAI_MENUS } from "../_lib/constant";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageaiSidebarMenuProps = {
  onMenuClick?: () => void;
};

const LanguageaiSidebarMenu = ({ onMenuClick }: LanguageaiSidebarMenuProps) => {
  const pathname = usePathname();

  const detectButtonVariant = (href: string) => {
    if (pathname.includes("plans") && href.includes("plans")) {
      return "default";
    }
    if (pathname.includes("history") && href.includes("history")) {
      return "default";
    }
    if (pathname.includes("storage") && href.includes("storage")) {
      return "default";
    }
    if (pathname.includes("shared") && href.includes("shared")) {
      return "default";
    }
    if (pathname === href) {
      return "default";
    }
    return "ghost";
  };

  return (
    <div className="flex flex-col gap-2 flex-1 px-2 ">
      {LANGUAGEAI_MENUS.map((menu) => {
        // Fix this using link after next js 15 upgrade
        if (menu.refresh) {
          return (
            <a
              href={menu.href}
              key={menu.href}
              className={cn(
                buttonVariants({
                  variant: detectButtonVariant(menu.href),
                  size: "sm",
                }),
                "justify-start",
              )}
            >
              {menu.icon}
              {menu.title}
            </a>
          );
        }
        return (
          <Link
            key={menu.href}
            href={menu.href}
            onClick={onMenuClick}
            className={cn(
              buttonVariants({
                variant: detectButtonVariant(menu.href),
                size: "sm",
              }),
              "justify-start",
            )}
          >
            {menu.icon}
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageaiSidebarMenu;
