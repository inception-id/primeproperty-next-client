import dynamic from "next/dynamic";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const ThemeButton = dynamic(()=> import("./ThemeButton"), {ssr: false});

const HomeHeader = () => {
    return (
        <nav className="shadow flex items-center justify-between">
            <Link href="/" className={buttonVariants({variant: "link"})}>
               INCEPTION
            </Link>
            <div>
               <ThemeButton />
            </div>

        </nav>
    )
};

export default HomeHeader;