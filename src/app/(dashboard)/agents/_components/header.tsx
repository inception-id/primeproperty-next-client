"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuCirclePlus, LuSearch } from "react-icons/lu";

export const Header = () => {
  return (
    <div className="w-full flex items-end justify-between">
      <form className="w-full md:w-fit">
        <Label htmlFor="agent-search">Search name/email</Label>
        <div className="flex items-center">
          <Input
            type="text"
            id="agent-search"
            placeholder="Agent 007"
            className="flex-1 rounded-r-none md:rounded-r-md"
          />
          <Button size="icon" className="rounded-l-none md:hidden">
            <LuSearch />
          </Button>
        </div>
      </form>

      <Link
        href="/agents/creation"
        className={cn(buttonVariants(), "hidden md:flex")}
      >
        <LuCirclePlus />
        New Agent
      </Link>
    </div>
  );
};
