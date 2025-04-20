import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const HeaderBreadcrumb = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "link" }), "text-xs")}
      >
        Home
      </Link>
    </div>
  );
};
