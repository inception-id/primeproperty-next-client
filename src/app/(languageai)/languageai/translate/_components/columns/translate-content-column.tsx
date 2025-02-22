import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { LuCopy } from "react-icons/lu";

type TranslateContentColumnProps = {
  row: {
    created_at: string;
    content_language: string;
    content: string;
  };
};

const TranslateContentColumn = ({ row }: TranslateContentColumnProps) => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex flex-col gap-2">
        <div className="text-xs capitalize">
          {row.content_language || "Auto detect language:"}
        </div>
        <div className="whitespace-pre-line">{row.content}</div>
      </div>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        onClick={async () => await copyToClipboard(row.content)}
      >
        <LuCopy />
      </Button>
    </div>
  );
};

export default TranslateContentColumn;
