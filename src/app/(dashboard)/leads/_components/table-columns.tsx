import { ColumnDef } from "@tanstack/react-table";

export const tableColumns: ColumnDef<any>[] = [
  {
    header: "id",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
];
