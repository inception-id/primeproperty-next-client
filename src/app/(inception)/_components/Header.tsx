"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import HeaderMenuDialog from "@/app/(inception)/_components/HeaderMenuDialog";

const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

const Header = () => {
  return (
    <nav className="shadow flex items-center justify-between fixed left-0 top-0 z-40 w-full bg-background">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        INCEPTION
      </Link>
      <div className="flex items-center gap-2">
        <ThemeButton />
        <HeaderMenuDialog />
      </div>
    </nav>
  );
};

export default Header;
