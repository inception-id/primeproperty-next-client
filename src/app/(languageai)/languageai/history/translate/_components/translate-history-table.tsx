import { findTranslationHistory } from "@/lib/api/translation/find-translation-history";
import EmptyHistory from "@/app/(languageai)/languageai/history/_components/empty-history";
import TranslateHistoryDataTable from "@/app/(languageai)/languageai/history/translate/_components/translate-history-data-table";

const TranslateHistoryTable = async () => {
  const translationHistory = await findTranslationHistory({cache: "no-store"});

  if (!translationHistory || translationHistory.data.length === 0) {
    return <EmptyHistory />;
  }

  return <TranslateHistoryDataTable data={translationHistory.data} />;
};

export default TranslateHistoryTable;
