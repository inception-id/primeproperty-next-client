import { ColumnDef } from "@tanstack/table-core";
import {TCheckbot} from "@/lib/api/checkbot/createCheckbot";
import CheckbotOriginalTextColumn
  from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-original-text-column";
import CheckbotCompletionColumn
  from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-completion-column";

export const CheckbotHistoryColumn: ColumnDef<TCheckbot>[] = [
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <CheckbotOriginalTextColumn row={row} />,
  },
  {
    accessorKey: "completion",
    header: "Final Text",
    cell: ({ row }) => <CheckbotCompletionColumn row={row} />,
  },
];
