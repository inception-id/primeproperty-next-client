import { ColumnDef } from "@tanstack/table-core";
import { formatDateToIndonesian } from "@/lib/utils";
import { TLanguage } from "@/lib/api/languages/createLanguage";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown, LuChevronDown } from "react-icons/lu";

export const LanguageTableColumns: ColumnDef<TLanguage>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => formatDateToIndonesian(row.getValue("created_at"), true),
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: ({ row }) => formatDateToIndonesian(row.getValue("updated_at"), true),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Title</span>
        <LuArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "iso_639_1",
    header: "ISO Code",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex gap-2">
        {/*<UpdateAiSystemPromptDialogTrigger row={row} />*/}
        {/*<DeleteAiSystemPromptDialog row={row} />*/}
      </div>
    ),
  },
];
