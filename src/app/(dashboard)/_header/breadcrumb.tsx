import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ADMIN_SIDEBAR_MENU } from "../_sidebar";

export const HeaderBreadcrumb = () => {
  const pathname = usePathname();

  const segment = useMemo(() => {
    const currentSegment = ADMIN_SIDEBAR_MENU.find((menu) =>
      pathname.includes(menu.url),
    );
    if (currentSegment) return currentSegment;
    return {
      url: "/",
      title: "Home",
    };
  }, [pathname]);
  return (
    <Link
      href={segment.url}
      className={cn(buttonVariants({ variant: "link" }), "text-xs")}
    >
      {segment.title}
    </Link>
  );
};
