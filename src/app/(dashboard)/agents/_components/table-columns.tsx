import { Agent } from "@/lib/api/agents/type";
import { formatDateToIndonesian } from "@/lib/date-time/format-date-to-indonesian";
import { ColumnDef } from "@tanstack/react-table";

export const tableColumns: ColumnDef<Agent>[] = [
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
