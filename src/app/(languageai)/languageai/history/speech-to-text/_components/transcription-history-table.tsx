import EmptyHistory from "@/app/(languageai)/languageai/history/_components/empty-history";
import { findSpeechToTextHistory } from "@/lib/api/speech-to-text/find-transcription-history";
import TranscriptionHistoryDataTable from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-history-data-table";

const TranscriptionHistoryTable = async () => {
  const transcriptionHistory = await findSpeechToTextHistory();

  if (!transcriptionHistory || transcriptionHistory.data.length === 0) {
    return <EmptyHistory />;
  }

  return <TranscriptionHistoryDataTable data={transcriptionHistory.data} />;
};

export default TranscriptionHistoryTable;
