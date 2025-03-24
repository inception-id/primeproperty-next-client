import { TypographyLarge } from "@/components/ui/typography/large";
import { HeaderSheet } from "./header-sheet";
import Link from "next/link";

export const HeaderMobile = () => {
  return (
    <div className="flex items-center justify-between md:hidden">
      <HeaderSheet />
      <Link className="pr-4" href="/exchange/api">
        <TypographyLarge>IDX API</TypographyLarge>
      </Link>
    </div>
  );
};
