import Image from "next/image";
import { Agent } from "@/lib/api/agents/type";
import { env } from "@/lib/env";
import { ColumnDef } from "@tanstack/react-table";
import { LuUserRound } from "react-icons/lu";
import { EditDialog } from "./edit-dialog";
import { DeleteDialog } from "./delete-dialog";

export const tableColumns: ColumnDef<Agent>[] = [
  {
    accessorKey: "profile_picture_url",
    header: "",
    cell: ({ row }) => {
      const picturePath = row.original.profile_picture_url;
      const profilePicUrl = env.NEXT_PUBLIC_S3_ENDPOINT + picturePath;
      return (
        <div className="relative size-8 overflow-hidden rounded-full border">
          {picturePath ? (
            <Image
              src={profilePicUrl}
              alt={picturePath}
              className="h-full w-full object-cover"
              width={50}
              height={50}
            />
          ) : (
            <LuUserRound className="h-full w-full text-muted-foreground/50" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "fullname",
    header: "name",
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "phone_number",
    header: "phone",
    cell: ({ row }) => {
      return `0${row.original.phone_number}`;
    },
  },
  {
    accessorKey: "action",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <EditDialog row={row} />
          <DeleteDialog row={row} />
        </div>
      );
    },
  },
];
