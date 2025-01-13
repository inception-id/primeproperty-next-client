import { findTextToSpeechHistory } from "@/lib/api/text-to-speech/find-tts-history";
import TtsHistoryDataTable from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-history-data-table";
import TableDataNotFound from "@/app/(languageai)/_components/table-data-not-found";

const TextToSpeechHistoryTable = async () => {
  const ttsHistory = await findTextToSpeechHistory({ cache: "no-store" });

  if (!ttsHistory || ttsHistory.data.length === 0) {
    return <TableDataNotFound text="No saved history" />;
  }

  return <TtsHistoryDataTable data={ttsHistory.data} />;
};

export default TextToSpeechHistoryTable;
