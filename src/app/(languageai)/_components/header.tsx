
import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import LanguageaiHeaderMenuDialog from "@/app/(languageai)/_components/header-menu-dialog";

const ThemeButton = dynamic(() => import("@/app/(inception)/_components/ThemeButton"), { ssr: false });

const LanguageaiHeader = () => {
    return (
        <nav className="shadow flex items-center justify-between fixed left-0 top-0 w-full bg-background lg:hidden">
            <Link href="/languageai" className={buttonVariants({ variant: "link" })}>
                LANGUAGE AI
            </Link>
            <div className="flex items-center gap-2">
                <ThemeButton />
                <LanguageaiHeaderMenuDialog />
            </div>
        </nav>
    );
};

export default LanguageaiHeader;
