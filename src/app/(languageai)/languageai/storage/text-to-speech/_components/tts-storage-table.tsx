import TtsStorageDataTable from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-data-table";
import { findTextToSpeechStorage } from "@/lib/api/text-to-speech/find-tts-storagee";
import TableDataNotFound from "@/app/(languageai)/_components/table-data-not-found";

const TextToSpeechStorageTable = async () => {
  const ttsStorage = await findTextToSpeechStorage();

  if (!ttsStorage || ttsStorage.data.length === 0) {
    return <TableDataNotFound text="No saved text to speech" />;
  }

  return <TtsStorageDataTable data={ttsStorage.data} />;
};

export default TextToSpeechStorageTable;
