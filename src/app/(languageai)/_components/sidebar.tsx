"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {usePathname} from "next/navigation";
import { cn } from "@/lib/utils";
import { LANGUAGEAI_MENUS } from "@/app/(languageai)/_lib/constant";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const LanguageaiSidebar = () => {
  const pathname = usePathname();

  const detectButtonVariant = (href: string) => {
      if (pathname.includes("history") && href.includes("history")) {
          return "default"
      }
      if (pathname.includes("storage") && href.includes("storage")) {
          return "default"
      }
      if (pathname === href) {
          return "default"
      }
      return "ghost"
  }
  return (
    <aside className="p-4 bg-secondary text-secondary-foreground hidden lg:flex flex-col">
      <div className="mb-4 text-center font-semibold hidden lg:block">
        LANGUAGE AI
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {LANGUAGEAI_MENUS.map((menu) => {
            // Fix this using link after next js 15 upgrade
            if (menu.refresh) {
                return <a
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
            }
                return <Link
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
                </Link>
        })}
      </div>
      <ThemeButton />
    </aside>
  );
};

export default LanguageaiSidebar;
