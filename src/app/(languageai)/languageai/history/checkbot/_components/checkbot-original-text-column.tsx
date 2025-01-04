import { Row } from "@tanstack/table-core";
import { formatDateToIndonesian } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";

type TCheckbotOriginalTextColumnProps = {
  row: Row<TCheckbot>;
};

const CheckbotOriginalTextColumn = ({
  row,
}: TCheckbotOriginalTextColumnProps) => {
  return (
    <div>
      <div className="text-xs mb-2">
        {formatDateToIndonesian(row.original.created_at, true)}
      </div>
      <div className="flex gap-1">
        <div className="flex-1">{row.original.content}</div>
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

export default CheckbotOriginalTextColumn;
