import EmptyHistory from "@/app/(languageai)/languageai/history/_components/empty-history";
import { findTextToSpeechHistory } from "@/lib/api/text-to-speech/find-tts-history";
import TtsHistoryDataTable from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-history-data-table";

const TextToSpeechHistoryTable = async () => {
  const ttsHistory = await findTextToSpeechHistory();

  if (!ttsHistory || ttsHistory.data.length === 0) {
    return <EmptyHistory />;
  }

  return <TtsHistoryDataTable data={ttsHistory.data} />;
};

export default TextToSpeechHistoryTable;
