"use client";

import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";
import { DataTable } from "@/components/ui/data-table";
import { AiSystemPromptTableColumns } from "@/app/(admin)/admin/ai-system-prompt/_components/AiSystemPromptTableColumns";

type TAiSystemPromptsTableProps = {
  data: TAiSystemPrompt[];
};

const AiSystemPromptsTable = ({ data }: TAiSystemPromptsTableProps) => {
  const table = useReactTable({
    data,
    columns: AiSystemPromptTableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-4 max-h-[90vh]">
      <DataTable table={table} />
    </div>
  );
};

export default AiSystemPromptsTable;
