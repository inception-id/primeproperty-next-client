"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  const pathname = usePathname();

  const MENUS = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "System prompt",
      href: "/admin/ai-system-prompt",
    },
  ];

  return (
    <aside className="p-4 bg-primary text-primary-foreground sticky left-0 top-0">
      <div className="mb-4 text-center font-semibold">INCEPTION.ID</div>

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
            {menu.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AdminSidebar;
