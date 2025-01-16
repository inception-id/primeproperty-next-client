import { Row } from "@tanstack/table-core";
import { formatDateToIndonesian } from "@/lib/utils";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";

type TTranscriptionStorageAudioColumn = {
  row: Row<TSpeechToTextStorage>;
};

const TranscriptionStorageAudioColumn = ({
  row,
}: TTranscriptionStorageAudioColumn) => {
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

export default TranscriptionStorageAudioColumn;
