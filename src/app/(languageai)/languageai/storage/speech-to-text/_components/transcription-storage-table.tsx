import { findSpeechToTextStorage } from "@/lib/api/speech-to-text/find-transcription-storage";
import TranscriptionStorageDataTable from "@/app/(languageai)/languageai/storage/speech-to-text/_components/transcription-storage-data-table";

const TranscriptionStorageTable = async () => {
  const transcriptionStorage = await findSpeechToTextStorage();
  return <TranscriptionStorageDataTable data={transcriptionStorage.data} />;
};

export default TranscriptionStorageTable;
