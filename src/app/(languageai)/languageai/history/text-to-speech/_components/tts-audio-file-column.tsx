import {Row} from "@tanstack/table-core";
import {TTextToSpeech} from "@/lib/api/text-to-speech/createTextToSpeech";

type TTtsAudioFileColumn = {
    row: Row<TTextToSpeech>
}

const TtsAudioFileColumn = ({row}: TTtsAudioFileColumn) => {
    return (
        <div className=" min-w-60 lg:min-w-96">
            <div className="text-xs mb-2">Voice: {row.original.voice}</div>
            <audio controls className="w-full ">
                <source src={row.getValue('audio_url')} type="audio/mpeg"/>
            </audio>
        </div>
    )
};

export default TtsAudioFileColumn;