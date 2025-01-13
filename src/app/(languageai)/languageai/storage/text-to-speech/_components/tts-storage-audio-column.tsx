import { Row } from "@tanstack/table-core";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";

type TTtsStorageAudioColumn = {
  row: Row<TTextToSpeechStorage>;
};

const TtsStorageAudioColumn = ({ row }: TTtsStorageAudioColumn) => {
  return (
    <div className=" min-w-60 lg:min-w-96">
      <div className="text-xs mb-2">Voice: {row.original.voice}</div>
      <audio controls className="w-full ">
        <source src={row.getValue("audio_url")} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default TtsStorageAudioColumn;
