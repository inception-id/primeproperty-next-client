import { ColumnDef } from "@tanstack/table-core";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";
import { formatDateToIndonesian } from "@/lib/utils";
import DeleteAiSystemPromptDialog from "@/app/(admin)/admin/ai-system-prompt/_components/DeleteAiSystemPromptDialog";
import UpdateAiSystemPromptDialogTrigger
  from "@/app/(admin)/admin/ai-system-prompt/_components/UpdateAiSystemPromptDialogTrigger";

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
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <UpdateAiSystemPromptDialogTrigger row={row} />
        <DeleteAiSystemPromptDialog row={row} />
      </div>
    ),
  },
];
