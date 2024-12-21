import { ColumnDef } from "@tanstack/table-core";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";
import { formatDateToIndonesian } from "@/lib/utils";

export const AiSystemPromptTableColumns: ColumnDef<TAiSystemPrompt>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "created_at",
    header: "created_at",
    cell: ({ row }) => formatDateToIndonesian(row.getValue("created_at"), true),
  },
  {
    accessorKey: "updated_at",
    header: "updated_at",
    cell: ({ row }) => formatDateToIndonesian(row.getValue("updated_at"), true),
  },
  {
    accessorKey: "product_name",
    header: "Product",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "prompt",
    header: "Prompt",
  },
];
