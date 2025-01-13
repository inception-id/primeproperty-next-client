import { ColumnDef } from "@tanstack/table-core";
import { TTextToSpeech } from "@/lib/api/text-to-speech/createTextToSpeech";
import TtsOriginalTextColumn from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-original-text-column";
import TtsAudioFileColumn from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-audio-file-column";
import TtsHistorySaveBtn from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-history-save-btn";

export const TtsHistoryColumn: ColumnDef<TTextToSpeech>[] = [
  {
    accessorKey: "input_content",
    header: "Original Text",
    cell: ({ row }) => <TtsOriginalTextColumn row={row} />,
  },
  {
    accessorKey: "audio_url",
    header: "Audio File",
    cell: ({ row }) => <TtsAudioFileColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TtsHistorySaveBtn row={row} />,
  },
];
