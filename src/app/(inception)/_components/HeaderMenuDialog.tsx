"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuMenu, LuX } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const HeaderMenuDialog = () => {
  const pathname = usePathname();
  const router = useRouter();

  const MENUS = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Account",
      href: "/account",
    },
    {
      title: "Language AI",
      href: "/languageai",
    },
    {
      title: "TARS (Free AI)",
      href: "/tars",
    },
  ];
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <LuMenu />
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between mb-4">
          <DialogTitle>Menu</DialogTitle>
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>
        <div className="flex flex-col">
          {MENUS.map((menu) => (
            <DialogClose
              key={menu.href}
              className={cn(
                buttonVariants({
                  variant: pathname === menu.href ? "secondary" : "link",
                }),
                "w-full justify-start",
              )}
              onClick={() => router.push(menu.href)}
            >
              {menu.title}
            </DialogClose>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderMenuDialog;
