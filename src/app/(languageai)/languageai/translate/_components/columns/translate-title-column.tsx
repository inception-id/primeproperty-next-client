import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { LuCopy } from "react-icons/lu";
import { formatDateToIndonesian } from "@/lib/utils";

type TranslateTitleColumnProps = {
  row: {
    title: string | null;
    created_at: string;
  };
};

const TranslateTitleColumn = ({ row }: TranslateTitleColumnProps) => {
  return (
    <div className="flex flex-col gap-2 w-28">
      <div className="text-xs capitalize">
        {formatDateToIndonesian(row.created_at, true)}
      </div>
      {row.title ? (
        <div className="whitespace-pre-line">{row.title}</div>
      ) : (
        <div className="opacity-50">No title</div>
      )}
    </div>
  );
};

export default TranslateTitleColumn;
