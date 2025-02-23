import { findCheckbotStorage } from "@/lib/api/checkbot/find-checkbot-storage";
import CheckbotStorageDataTable from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-data-table";

const CheckbotStorageTable = async () => {
  const checkbotStorage = await findCheckbotStorage();
  return <CheckbotStorageDataTable data={checkbotStorage.data} />;
};

export default CheckbotStorageTable;
