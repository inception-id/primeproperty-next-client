import { ColumnDef } from "@tanstack/table-core";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";
import TranscriptionStorageAudioColumn from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-audio-column";
import TranscriptionStoragTextColumn from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-storage-text-column";
import TranscriptionStorageActionColumn from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-action-column";

export const TranscriptionStorageColumn: ColumnDef<TSpeechToTextStorage>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) =>
        row.original.title || <span className="opacity-50">No title</span>,
  },
  {
    accessorKey: "audio_url",
    header: "Audio File",
    cell: ({ row }) => <TranscriptionStorageAudioColumn row={row} />,
  },
  {
    accessorKey: "updated_transcription_text",
    header: "Transcription",
    cell: ({ row }) => <TranscriptionStoragTextColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TranscriptionStorageActionColumn row={row} />,
  },
];
