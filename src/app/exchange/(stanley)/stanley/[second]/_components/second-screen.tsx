import { TypographyLarge } from "@/components/ui/typography/large";
import { getTicmiAnnualMarketInfo } from "../../../_server/getTicmiAnnualMarketInfo";
import { MarketInfoTable } from "./market-info";
import { getTicmiAnnualBalanceSheet } from "../../../_server/getTicmiAnnualBalanceSheet";
import { BalanceSheetTable } from "./balance-sheet";

type TSecondScreen = {
  stockCode: string;
};

export const SecondScreen = async ({ stockCode }: TSecondScreen) => {
  const marketInfo = await getTicmiAnnualMarketInfo(stockCode);
  const balanceSheet = await getTicmiAnnualBalanceSheet(stockCode);
  return (
    <div className="flex flex-col gap-4">
      <TypographyLarge>Second Screen ({stockCode})</TypographyLarge>

      <MarketInfoTable data={marketInfo.data} />
      <BalanceSheetTable
        data={balanceSheet.data.data}
        lastUpdate={balanceSheet.data.lastUpdate}
        shareOutstanding={marketInfo.data[0].listedShares}
      />
    </div>
  );
};
