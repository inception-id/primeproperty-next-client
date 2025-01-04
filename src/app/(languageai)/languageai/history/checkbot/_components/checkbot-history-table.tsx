
import EmptyHistory from "@/app/(languageai)/languageai/history/_components/empty-history";
import {findCheckbotHistory} from "@/lib/api/checkbot/find-checkbot-history";
import CheckbotHistoryDataTable
    from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-history-data-table";

const CheckbotHistoryTable = async () => {
    const checkbotHistory = await findCheckbotHistory();

    if (!checkbotHistory || checkbotHistory.data.length === 0) {
        return <EmptyHistory />;
    }

    return <CheckbotHistoryDataTable data={checkbotHistory.data} />;
};

export default CheckbotHistoryTable;
