import Image from "next/image";
import { Agent } from "@/lib/api/agents/type";
import { formatDateToIndonesian } from "@/lib/date-time/format-date-to-indonesian";
import { env } from "@/lib/env";
import { ColumnDef } from "@tanstack/react-table";
import { LuUser } from "react-icons/lu";

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
            <LuUser className="h-full w-full text-muted-foreground/50" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "fullname",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
    cell: ({ row }) => {
      return `0${row.original.phone_number}`;
    },
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: ({ row }) => {
      return formatDateToIndonesian(row.original.created_at, true);
    },
  },
  {
    accessorKey: "updated_at",
    header: "Last Updated",
    cell: ({ row }) => {
      return formatDateToIndonesian(row.original.updated_at, true);
    },
  },
];
