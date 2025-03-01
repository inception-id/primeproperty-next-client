"use client";
import { findAllTarsChatRooms } from "@/app/(tars)/_server/find-all-tars-chat-rooms";
import TarsSidebarLogin from "./tars-sidebar-login";
import Link from "next/link";
import { cn, formatDateToIndonesian } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const TarsSidebarChatRooms = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tars-sidebar-chat-rooms"],
    queryFn: async () => await findAllTarsChatRooms(),
  });

  if (isLoading) {
    return (
      <div className="pl-2 animate-pulse">Checking your chat rooms...</div>
    );
  }

  if (!data || data?.status === 401) {
    return <TarsSidebarLogin />;
  }
  if (data.data.length === 0) {
    return <div className="pl-2">No previous sessions</div>;
  }

  return (
    <div className="pl-2 md:p-2 flex flex-col gap-1 flex-2 overflow-y-auto">
      {data.data.map((chatRoom) => (
        <Link
          key={`${chatRoom.id}_${chatRoom.title}`}
          href={`/tars/${chatRoom.id}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full justify-start",
          )}
        >
          {`- chat: ${formatDateToIndonesian(chatRoom.created_at, true)}`}
        </Link>
      ))}
    </div>
  );
};

export default TarsSidebarChatRooms;
