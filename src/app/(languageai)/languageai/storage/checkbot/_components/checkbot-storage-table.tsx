import {findCheckbotStorage} from "@/lib/api/checkbot/find-checkbot-storage";
import TableDataNotFound from "@/app/(languageai)/_components/table-data-not-found";
import CheckbotStorageDataTable
    from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-data-table";

const CheckbotStorageTable = async () => {
    const checkbotStorage = await findCheckbotStorage()
    if (!checkbotStorage || checkbotStorage.data.length === 0) {
        return <TableDataNotFound text="No saved checkbot" />
    }
    return <CheckbotStorageDataTable data={checkbotStorage.data} />;
};

export default CheckbotStorageTable;