import { Row } from "@tanstack/table-core";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";
import TranscriptionStorageDeleteDialog
    from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-delete-dialog";
import TranscriptionStorageUpdateDialog
    from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-update-dialog";

type TranscriptionStorageActionColumnProps = {
  row: Row<TSpeechToTextStorage>;
};

const TranscriptionStorageActionColumn = ({
  row,
}: TranscriptionStorageActionColumnProps) => {
  return <div className="flex flex-col gap-1">
      <TranscriptionStorageDeleteDialog transcriptionId={row.original.id} />
      <TranscriptionStorageUpdateDialog row={row} />
  </div>;
};

export default TranscriptionStorageActionColumn;
