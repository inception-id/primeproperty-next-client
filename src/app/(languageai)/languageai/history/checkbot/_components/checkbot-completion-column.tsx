import { Row } from "@tanstack/table-core";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";

type TCheckbotCompletionColumnProps = {
  row: Row<TCheckbot>;
};

const CheckbotCompletionColumn = ({ row }: TCheckbotCompletionColumnProps) => {
  return (
    <div className="flex gap-1">
      <div className="flex-1">{row.original.completion}</div>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        onClick={async () => await copyToClipboard(row.original.completion)}
      >
        <LuCopy />
      </Button>
    </div>
  );
};

export default CheckbotCompletionColumn;
