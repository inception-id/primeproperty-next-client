"use client";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuCirclePlus, LuSearch } from "react-icons/lu";

export const Filter = () => {
  return (
    <div className="w-full flex items-end justify-between">
      <div className="flex items-center w-full md:w-fit">
        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "border-r-transparent rounded-r-none",
          )}
        >
          <LuSearch />
        </div>
        <Input
          type="text"
          id="agent-search"
          placeholder="Search name or email..."
          className="rounded-l-none border-l-transparent focus-visible:ring-transparent placeholder:text-sm w-full md:w-fit"
        />
      </div>

      <Link
        href="/agents/new"
        className={cn(buttonVariants({ size: "icon" }), "hidden md:flex")}
      >
        <LuCirclePlus />
      </Link>
    </div>
  );
};
