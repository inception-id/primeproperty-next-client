import { findSpeechToTextStorage } from "@/lib/api/speech-to-text/find-transcription-storage";
import TableDataNotFound from "@/app/(languageai)/_components/table-data-not-found";
import TranscriptionStorageDataTable from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-data-table";

const TranscriptionStorageTable = async () => {
  const transcriptionStorage = await findSpeechToTextStorage();
  if (!transcriptionStorage || transcriptionStorage.data.length === 0) {
    return <TableDataNotFound text="No saved transcription " />;
  }
  return <TranscriptionStorageDataTable data={transcriptionStorage.data} />;
};

export default TranscriptionStorageTable;
