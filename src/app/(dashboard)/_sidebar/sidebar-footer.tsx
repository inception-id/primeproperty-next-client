"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { LogoutButton } from "./sidebar-logout";
import { useAgentBySupertokensId } from "@/hooks";

export const SidebarFooter = () => {
  const { isLoading, data } = useAgentBySupertokensId();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 justify-between">
        <span className="flex flex-col gap-0.5 px-2">
          <Skeleton className="w-24 h-4 bg-foreground/10 rounded-none" />
          <Skeleton className="w-36 h-4 bg-foreground/10 rounded-none" />
        </span>
        <Skeleton className="w-10 h-10 bg-foreground/10 rounded-none" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 justify-between">
      <span className="flex flex-col px-3 text-xs">
        <div>{data?.data?.fullname}</div>
        <div className="text-foreground/50">{data?.data?.email}</div>
      </span>
      <LogoutButton />
    </div>
  );
};
