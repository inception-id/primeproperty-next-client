"use client";
import { LogoLink } from "./logo-link";
import { HeaderSheet } from "./sheet";
import { NavLinks } from "./nav-links";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const params = useParams();
  const pathname = usePathname();
  return (
    <nav>
      <div
        className={cn(
          "flex items-center justify-between container mx-auto py-2",
          pathname.includes("/properties") &&
            params?.path?.length === 1 &&
            !Number.isNaN(+params.path[0]) &&
            "max-w-6xl",
        )}
      >
        <LogoLink />
        <HeaderSheet />
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};
