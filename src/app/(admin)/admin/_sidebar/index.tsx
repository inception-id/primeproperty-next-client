"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {LuHouse, LuLanguages} from "react-icons/lu";
import { TbBrandOpenai } from "react-icons/tb";

const AdminSidebar = () => {
  const pathname = usePathname();

  const MENUS = [
    {
      title: "Home",
      href: "/",
      icon: <LuHouse />,
    },
    {
      title: "System prompts",
      href: "/admin/ai-system-prompt",
      icon: <TbBrandOpenai />,
    },
    {
      title: "Languages",
      href: "/admin/language",
      icon: <LuLanguages/>,
    },
  ];

  return (
    <aside className="p-4 bg-primary text-primary-foreground sticky left-0 top-0">
      <div className="mb-4 text-center font-semibold hidden lg:block">
        INCEPTION.ID
      </div>

      <div className="flex flex-col gap-4">
        {MENUS.map((menu) => (
          <Link
            href={menu.href}
            key={menu.href}
            className={cn(
              buttonVariants({
                variant: pathname === menu.href ? "secondary" : "ghost",
              }),
              "justify-start",
            )}
          >
            {menu.icon}
            <span className="hidden lg:block">{menu.title}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AdminSidebar;
