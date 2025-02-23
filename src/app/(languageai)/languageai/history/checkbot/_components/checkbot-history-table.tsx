import { findCheckbotHistory } from "@/lib/api/checkbot/find-checkbot-history";
import CheckbotHistoryDataTable from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-history-data-table";

const CheckbotHistoryTable = async () => {
  const checkbotHistory = await findCheckbotHistory({ cache: "no-store" });

  return <CheckbotHistoryDataTable data={checkbotHistory.data} />;
};

export default CheckbotHistoryTable;
