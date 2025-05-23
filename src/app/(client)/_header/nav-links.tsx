"use client";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "./_lib/constant";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ThemeButton = dynamic(() => import("./theme-button"), {
  ssr: false,
});

type NavLinksProps = {
  onClick?: () => void;
};

export const NavLinks = ({ onClick }: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col flex-1 md:flex-row md:gap-2">
      <div className="flex flex-col flex-1 md:flex-row">
        {NAVIGATION_ITEMS.map((nav, index) => (
          <Link
            key={`${nav.href}-${index}`}
            href={nav.href}
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              pathname === nav.href && "underline",
              "justify-between",
            )}
            onClick={() => onClick?.()}
          >
            {nav.indonesian_label}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-start ">
        <ThemeButton />
      </div>
    </div>
  );
};
