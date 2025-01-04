import { Row } from "@tanstack/table-core";
import { formatDateToIndonesian } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import {TSpeechToText} from "@/lib/api/speech-to-text/createTextToSpeech";

type TTranscriptionTextColumnProps = {
  row: Row<TSpeechToText>;
};

const TranscriptionTextColumn = ({ row }: TTranscriptionTextColumnProps) => {
  return (
      <div className="flex gap-1">
        <div className="flex-1">{row.original.transcription_text}</div>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={async () =>
            await copyToClipboard(row.original.transcription_text)
          }
        >
          <LuCopy />
        </Button>
      </div>
  );
};

export default TranscriptionTextColumn;
