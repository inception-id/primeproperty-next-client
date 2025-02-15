import { ColumnDef } from "@tanstack/table-core";
import { TTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";
import TtsStorageTextColumn from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-text-column";
import TtsStorageAudioColumn from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-audio-column";
import TtsStorageDeleteBtn from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-delete-btn";
import TtsStorageUpdateDialog
  from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-update-dialog";

export const TtsStorageColumn: ColumnDef<TTextToSpeechStorage>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) =>
        row.original.title || <span className="opacity-50">No title</span>,
  },
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
    cell: ({ row }) => <>
      <TtsStorageDeleteBtn row={row} />
      <TtsStorageUpdateDialog row={row} />
      </>,
  },
];
