import { ColumnDef } from "@tanstack/table-core";
import TtsOriginalTextColumn from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-original-text-column";
import TtsAudioFileColumn from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-audio-file-column";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";
import TtsStorageTextColumn
  from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-text-column";
import TtsStorageAudioColumn
  from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-audio-column";
import TtsStorageDeleteBtn
  from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-delete-btn";

export const TtsStorageColumn: ColumnDef<TTextToSpeechStorage>[] = [
  {
    accessorKey: "input_content",
    header: "Original Text",
    cell: ({ row }) => <TtsStorageTextColumn row={row} />,
  },
  {
    accessorKey: "audio_url",
    header: "Audio File",
    cell: ({ row }) => <TtsStorageAudioColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({row}) => <TtsStorageDeleteBtn row={row} />
  },
];
