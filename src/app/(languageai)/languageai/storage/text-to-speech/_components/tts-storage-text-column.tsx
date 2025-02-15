import { Row } from "@tanstack/table-core";
import { formatDateToIndonesian } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { TTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";

type TTtsStorageTextColumnProps = {
  row: Row<TTextToSpeechStorage>;
};

const TtsStorageTextColumn = ({ row }: TTtsStorageTextColumnProps) => {
  return (
    <div>
        <div className="flex items-center justify-between">

      <div className="text-xs">
        {formatDateToIndonesian(row.original.created_at, true)}
      </div>
            <Button
                type="button"
                size="icon"
                variant="secondary"
                onClick={async () =>
                    await copyToClipboard(row.original.input_content)
                }
            >
                <LuCopy />
            </Button>
        </div>
        <div className="flex-1 whitespace-pre-line">
          {row.original.input_content}
        </div>
    </div>
  );
};

export default TtsStorageTextColumn;
