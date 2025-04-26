"use client";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, ChangeEvent } from "react";
import { LuCirclePlus, LuSearch } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

export const Filter = () => {
  const router = useRouter();
  const typingTimeoutRef = useRef<any>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef?.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      router.push(`/agents?name_or_email=${e.target.value}`);
    }, 500);
  };
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
          className="rounded-l-none border-l-transparent focus-visible:ring-transparent w-full md:w-fit"
          onChange={onChange}
        />
      </div>

      <Link
        href="/agents/new"
        className={cn(buttonVariants({ size: "icon" }), "hidden md:flex")}
        data-tooltip-id="add-new-agent"
        data-tooltip-content="Add new agent"
      >
        <LuCirclePlus />
      </Link>
      <Tooltip id="add-new-agent" />
    </div>
  );
};
