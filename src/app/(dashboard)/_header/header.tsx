import Link from "next/link";
import { HeaderSheet } from "./sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between border-b">
      <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
        Primepro
      </Link>
      <HeaderSheet />
    </div>
  );
};

export const Header = () => {
  return (
    <nav className="">
      <MobileHeader />
    </nav>
  );
};
