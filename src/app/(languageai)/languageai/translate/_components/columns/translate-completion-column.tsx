import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { LuCopy } from "react-icons/lu";

type TranslateCompletionColumnProps = {
  row: {
    completion?: string;
    updated_completion?: string;
    target_language: string;
  };
};

const TranslateCompletionColumn = ({ row }: TranslateCompletionColumnProps) => {
  return (
    <div className="flex gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <div className="text-xs capitalize">{row.target_language}:</div>
        <div className="whitespace-pre-line">
          {row.completion || row.updated_completion}
        </div>
      </div>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        className="min-w-10"
        onClick={async () =>
          await copyToClipboard(
            String(row?.completion) || String(row?.updated_completion),
          )
        }
      >
        <LuCopy />
      </Button>
    </div>
  );
};

export default TranslateCompletionColumn;
