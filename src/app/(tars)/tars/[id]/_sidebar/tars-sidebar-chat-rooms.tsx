"use client";
import { findAllTarsChatRooms } from "@/app/(tars)/_server/find-all-tars-chat-rooms";
import TarsSidebarLogin from "./tars-sidebar-login";
import Link from "next/link";
import { cn, formatDateToIndonesian } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TbX } from "react-icons/tb";
import { deleteTarsChatRooms } from "@/app/(tars)/_server/delete-tars-chat-room";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";

const TarsSidebarChatRooms = () => {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["tars-sidebar-chat-rooms"],
    queryFn: async () => await findAllTarsChatRooms(),
  });

  const handleDelete = async (id: number) => {
    try {
      const deletedRoom = await deleteTarsChatRooms(id);
      if (deletedRoom.data.id === id) {
        router.push("/tars");
      }
      queryClient.invalidateQueries({ queryKey: ["tars-sidebar-chat-rooms"] });
      toast.success("Chat room deleted successfully");
      return deletedRoom;
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete chat room");
    }
  };

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
    <div className="pl-2 md:p-2 flex flex-col gap-1 flex-1 overflow-y-auto h-full">
      {data.data.map((chatRoom) => (
        <div
          key={`${chatRoom.id}_${chatRoom.title}`}
          className={cn(
            buttonVariants({
              variant: Number(params.id) === chatRoom.id ? "default" : "ghost",
            }),
            "w-full justify-start pr-0 rounded-lg",
          )}
        >
          <Link href={`/tars/${chatRoom.id}`} className="flex-1">
            {`- chat: ${formatDateToIndonesian(chatRoom.created_at, true)}`}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={async () => await handleDelete(chatRoom.id)}
            className="min-w-10 rounded-l-none"
          >
            <TbX />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TarsSidebarChatRooms;
