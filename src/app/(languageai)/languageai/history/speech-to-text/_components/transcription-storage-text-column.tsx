import { Row } from "@tanstack/table-core";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";

type TTranscriptionStorageTextColumnProps = {
  row: Row<TSpeechToTextStorage>;
};

const TranscriptionStoragTextColumn = ({
  row,
}: TTranscriptionStorageTextColumnProps) => {
  return (
    <div className="flex gap-1">
      <div className="flex-1 whitespace-pre-line">
        {row.original.updated_transcription_text}
      </div>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        onClick={async () =>
          await copyToClipboard(row.original.updated_transcription_text)
        }
      >
        <LuCopy />
      </Button>
    </div>
  );
};

export default TranscriptionStoragTextColumn;
