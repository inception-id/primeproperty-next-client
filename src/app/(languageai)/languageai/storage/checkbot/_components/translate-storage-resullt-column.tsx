import { Row } from "@tanstack/table-core";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import {TCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";

type TCheckbotStorageResultColumnProps = {
  row: Row<TCheckbotStorage>;
};

const CheckbotStorageResultlColumn = ({
  row,
}: TCheckbotStorageResultColumnProps) => {
  return (
      <div className="flex gap-1">
        <div className="flex-1 whitespace-pre-line">
          {row.original.updated_completion}
        </div>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={async () =>
            await copyToClipboard(row.original.updated_completion)
          }
        >
          <LuCopy />
        </Button>
      </div>
  );
};

export default CheckbotStorageResultlColumn;
