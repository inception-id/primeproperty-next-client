"use client";
import Link from "next/link";
import { ADMIN_SIDEBAR_MENU } from "./_lib/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuHouse } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useSidebarStore } from "./_lib/store";
import { useShallow } from "zustand/react/shallow";
import { Tooltip } from "react-tooltip";
import React from "react";

type SidebarMenuProps = {
  onLinkClick?: () => void;
};

export const SidebarMenu = ({ onLinkClick }: SidebarMenuProps) => {
  const pathname = usePathname();
  const isMinimized = useSidebarStore(useShallow((state) => state.isMinimized));

  if (isMinimized) {
    return (
      <div className="flex-1 flex flex-col h-full gap-1">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
        >
          P
        </Link>
        <Link
          href="/"
          onClick={() => onLinkClick && onLinkClick()}
          className={cn(
            buttonVariants({
              variant: pathname === "/" ? "default" : "ghost",
              size: "icon",
            }),
          )}
          data-tooltip-id="sidebar-home-link"
          data-tooltip-content="Home"
        >
          <LuHouse />
        </Link>
        <Tooltip id="sidebar-home-link" />
        {ADMIN_SIDEBAR_MENU.map((menu, index) => (
          <React.Fragment key={`${index}_${menu.title}_${menu.url}`}>
            <Link
              href={menu.url}
              className={cn(
                buttonVariants({
                  variant: pathname === menu.url ? "default" : "ghost",
                  size: "icon",
                }),
              )}
              data-tooltip-id={`sidebar-${menu.title}-link`}
              data-tooltip-content={menu.title}
            >
              {menu.icon}
            </Link>
            <Tooltip id={`sidebar-${menu.title}-link`} />
          </React.Fragment>
        ))}
      </div>
    );
  }
  return (
    <div className="flex-1 h-full px-2">
      <Link
        href="/"
        onClick={() => onLinkClick && onLinkClick()}
        className={cn(
          buttonVariants({
            variant: pathname === "/" ? "default" : "ghost",
            size: "sm",
          }),
          "w-full px-2 justify-start mb-1 md:text-xs",
        )}
      >
        <LuHouse />
        Home
      </Link>
      <Accordion type="single" collapsible>
        {ADMIN_SIDEBAR_MENU.map((menu, index) => (
          <AccordionItem
            value={`${index}_${menu.url}`}
            key={`${index}_${menu.title}_${menu.url}`}
            className="border-none mb-1"
          >
            <AccordionTrigger
              className={cn(
                buttonVariants({
                  variant: pathname.includes(menu.url) ? "default" : "ghost",
                  size: "sm",
                }),
                "px-2 justify-between hover:no-underline md:text-xs",
              )}
            >
              <div className="flex items-center gap-2">
                {menu.icon}
                {menu.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className=" p-0 pl-3 mt-1">
              <div className="border-l pl-2 flex flex-col gap-1">
                {menu.items.map((menuItem, index) => (
                  <Link
                    key={`${index}_${menuItem.title}_${menuItem.url}`}
                    href={menuItem.url}
                    onClick={() => onLinkClick && onLinkClick()}
                    className={cn(
                      buttonVariants({
                        variant:
                          pathname === menuItem.url ? "default" : "ghost",
                        size: "sm",
                      }),
                      "w-full px-2 justify-start md:text-xs",
                    )}
                  >
                    {menuItem.icon}
                    {menuItem.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
