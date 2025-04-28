import { buttonVariants } from "@/components/ui/button";
import { AgentRole } from "@/lib/api/agents/type";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { formatDateToIndonesian } from "@/lib/date-time/format-date-to-indonesian";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { LuPencil, LuUserRound } from "react-icons/lu";

export const getTableColumns = (
  role?: AgentRole,
): ColumnDef<PropertyWithAgent>[] => {
  const s3Endpoint = env.NEXT_PUBLIC_S3_ENDPOINT;
  const columns: ColumnDef<PropertyWithAgent>[] = [
    {
      header: "ID",
      accessorKey: "id",
      cell: ({ row }) => row.original[0].id,
    },
    {
      header: "Judul & Harga",
      accessorKey: "title",
      cell: ({ row }) => (
        <div className="flex flex-col">
          <p className="font-semibold">{row.original[0].title}</p>
          <p className="text-muted-foreground">
            Rp {row.original[0].price.toLocaleString("id-ID")}
          </p>
        </div>
      ),
    },
    {
      header: "Area (jalan, kabupaten, provinsi)",
      accessorKey: "area",
      cell: ({ row }) => {
        const address = [
          row.original[0].street,
          row.original[0].regency,
          row.original[0].province,
        ].join(", ");
        return address;
      },
    },
    {
      header: "Created at",
      accessorKey: "created_at",
      cell: ({ row }) => {
        return formatDateToIndonesian(row.original[0].created_at, true);
      },
    },
  ];

  if (role === AgentRole.Admin) {
    columns.push({
      header: "Agent",
      accessorKey: "agent",
      cell: ({ row }) => {
        const picturePath = row.original[3];
        const profilePicUrl = s3Endpoint + picturePath;
        return (
          <div className="flex gap-2 items-center">
            <div className="size-8 overflow-hidden rounded-full border">
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
            <div className="flex flex-col text-xs">
              <span className="text-muted-foreground">{row.original[1]}</span>
              <span>0{row.original[2]}</span>
            </div>
          </div>
        );
      },
    });
  }

  columns.push(
    {
      header: "Sold/Available",
      accessorKey: "sold_status",
      cell: ({ row }) => {
        const status = row.original[0].sold_status;
        return status;
      },
    },
    {
      header: "",
      accessorKey: "action",
      cell: ({ row }) => {
        return (
          <>
            <Link
              href={`/properties/${row.original[0].id}`}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <LuPencil />
            </Link>
          </>
        );
      },
    },
  );

  return columns;
};
