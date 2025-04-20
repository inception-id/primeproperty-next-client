"use client";

import { useAgentBySupertokensId } from "@/hooks";
import { LuLoader } from "react-icons/lu";
import { ADMIN_SIDEBAR_MENU } from "./_sidebar";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const DashboardPage = () => {
  const { isLoading, data } = useAgentBySupertokensId();
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex gap-2 text-sm items-center">
          <LuLoader className="animate-spin" />
          Loading
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 p-2 px-3">
      <div>
        <h3 className="text-sm ">Hi, {data?.data?.fullname}!</h3>
        <h4 className="text-foreground/75 font-bold">
          What are you gonna do today?
        </h4>
      </div>
      {ADMIN_SIDEBAR_MENU.map((menu, index) => (
        <div
          key={`${index}_dashboard_${menu.title}`}
          className="grid grid-cols-2 gap-4 max-w-xs"
        >
          {menu.items.map((menuItem, i) => (
            <Link
              key={`${i}_dashboard_${menuItem.subtitle}`}
              href={menuItem.url}
              className={cn(
                buttonVariants({ size: "sm" }),
                "justify-start text-xs",
              )}
            >
              {menuItem.icon}
              {menuItem.subtitle}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
