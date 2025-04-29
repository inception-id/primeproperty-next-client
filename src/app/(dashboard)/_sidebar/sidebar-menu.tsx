"use client";
import Link from "next/link";
import { ADMIN_SIDEBAR_MENU, AGENT_SIDEBAR_MENU } from "./_lib/constant";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useSidebarStore } from "./_lib/store";
import { useShallow } from "zustand/react/shallow";
import { Tooltip } from "react-tooltip";
import React, { useMemo } from "react";
import Image from "next/image";
import { useAgentBySupertokensId } from "@/hooks";
import { AgentRole } from "@/lib/api/agents/type";

type SidebarMenuProps = {
  onLinkClick?: () => void;
};

export const SidebarMenu = ({ onLinkClick }: SidebarMenuProps) => {
  const pathname = usePathname();
  const isMinimized = useSidebarStore(useShallow((state) => state.isMinimized));
  const { data } = useAgentBySupertokensId();

  const MENU = useMemo(() => {
    if (data?.data?.role === AgentRole.Admin) {
      return ADMIN_SIDEBAR_MENU;
    }
    return AGENT_SIDEBAR_MENU;
  }, [data]);

  if (isMinimized) {
    return (
      <div className="flex-1 flex flex-col h-full gap-2 pt-2">
        <Link
          href="/"
          data-tooltip-id="sidebar-home-link"
          data-tooltip-content="Home"
        >
          <Image
            src="/images/primepro.png"
            alt="Primepro"
            width={25}
            height={25}
            className="mx-auto"
          />
        </Link>
        <Tooltip id="sidebar-home-link" />
        {MENU.map((menu, index) => (
          <React.Fragment key={`${index}_${menu.title}_${menu.url}`}>
            <Link
              href={menu.url}
              className={cn(
                buttonVariants({
                  variant: pathname.includes(menu.url) ? "default" : "ghost",
                  size: "icon",
                }),
              )}
              data-tooltip-id={`sidebar-${menu.title}-link`}
              data-tooltip-content={menu.title}
            >
              {menu.icon}
            </Link>
            <Tooltip id={`sidebar-${menu.title}-link`} className="z-50" />
          </React.Fragment>
        ))}
      </div>
    );
  }
  return (
    <div className="flex-1 h-full px-2 flex flex-col gap-2">
      {MENU.map((menu, index) => (
        <Link
          key={`${index}_${menu.title}_${menu.url}`}
          href={menu.url}
          onClick={onLinkClick}
          className={cn(
            buttonVariants({
              variant: pathname.includes(menu.url) ? "default" : "ghost",
              size: "icon",
            }),
            "w-full justify-start px-2",
          )}
          data-tooltip-id={`sidebar-${menu.title}-link`}
          data-tooltip-content={menu.title}
        >
          {menu.icon}
          {menu.title}
        </Link>
      ))}
    </div>
  );
};
