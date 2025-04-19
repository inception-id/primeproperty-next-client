"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { getAgentTokenData } from "@/lib/cookie/get-agent-token-data";
import { useQuery } from "@tanstack/react-query";
import { LogoutButton } from "./sidebar-logout";

export const SidebarFooter = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["sidebar-footer"],
    queryFn: () => getAgentTokenData(),
  });

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
      <span className="flex flex-col px-4 text-xs">
        <div>{data?.fullname}</div>
        <div className="text-foreground/50">{data?.email}</div>
      </span>
      <LogoutButton />
    </div>
  );
};
