"use client";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import LanguageaiSidebarMenu from "./languageai-sidebar-menu";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const LanguageaiSidebar = () => {
  return (
    <aside className="bg-background hidden md:flex flex-col border-r pt-2">
      <LanguageaiSidebarMenu />
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        >
          <Image
            src="/images/inception.png"
            alt="Inception"
            width={15}
            height={15}
          />
        </Link>
        <ThemeButton />
      </div>
    </aside>
  );
};

export default LanguageaiSidebar;
