import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import HomeHeaderMenuDialog from "@/app/(inception)/home/_components/HomeHeaderMenuDialog";

const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

const HomeHeader = () => {
  return (
    <nav className="shadow flex items-center justify-between fixed left-0 top-0 w-full">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        INCEPTION
      </Link>
      <div className="flex items-center gap-2">
        <ThemeButton />
        <HomeHeaderMenuDialog />
      </div>
    </nav>
  );
};

export default HomeHeader;
