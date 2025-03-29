import { buttonVariants } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typography/large";
import { cn } from "@/lib/utils";
import Link from "next/link";

const StanleyScreenerPage = () => {
  return (
    <>
      <TypographyLarge className="mb-4">Stanley Screener</TypographyLarge>

      <ol className="list-decimal ml-4">
        <li>
          <Link
            href="/exchange/stanley/first"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            First Screen Stocks
          </Link>
        </li>
      </ol>
    </>
  );
};

export default StanleyScreenerPage;
