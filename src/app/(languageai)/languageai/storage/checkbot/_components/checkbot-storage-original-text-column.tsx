import { Row } from "@tanstack/table-core";
import { formatDateToIndonesian } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";

type TCheckbotStorageOriginalTextColumnProps = {
  row: Row<TCheckbotStorage>;
};

const CheckbotStorageOriginalTextColumn = ({
  row,
}: TCheckbotStorageOriginalTextColumnProps) => {
  return (
    <div>
      <div className="text-xs mb-2">
        {formatDateToIndonesian(row.original.created_at, true)}
      </div>
      <div className="text-xs mb-2 capitalize">{row.original.instruction}:</div>
      <div className="flex gap-1">
        <div className="flex-1 whitespace-pre-line">{row.original.content}</div>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={async () => await copyToClipboard(row.original.content)}
        >
          <LuCopy />
        </Button>
      </div>
    </div>
  );
};

export default CheckbotStorageOriginalTextColumn;
