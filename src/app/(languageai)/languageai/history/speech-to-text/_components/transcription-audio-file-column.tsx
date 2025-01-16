import { Row } from "@tanstack/table-core";
import { TSpeechToText } from "@/lib/api/speech-to-text/createTranscription";
import { formatDateToIndonesian } from "@/lib/utils";

type TTranscriptionAudioFileColumn = {
  row: Row<TSpeechToText>;
};

const TranscriptionAudioFileColumn = ({
  row,
}: TTranscriptionAudioFileColumn) => {
  return (
    <div>
      <div className="text-xs mb-2">
        {formatDateToIndonesian(row.original.created_at, true)}
      </div>
      <audio controls className="w-full ">
        <source src={row.getValue("audio_url")} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default TranscriptionAudioFileColumn;
