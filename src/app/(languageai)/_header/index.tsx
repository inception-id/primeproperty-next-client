import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import LanguageaiHeaderSheet from "./languageai-header-sheet";

const LanguageaiHeader = () => {
  return (
    <nav className="shadow flex items-center justify-between w-full bg-background md:hidden">
      <Link href="/languageai" className={buttonVariants({ variant: "link" })}>
        LANGUAGE AI
      </Link>
      <LanguageaiHeaderSheet />
    </nav>
  );
};

export default LanguageaiHeader;
