import { TypographyLarge } from "@/components/ui/typography/large";
import { getTicmiAnnualMarketInfo } from "../../../_server/getTicmiAnnualMarketInfo";
import { MarketInfoTable } from "./market-info";
import { getTicmiAnnualBalanceSheet } from "../../../_server/getTicmiAnnualBalanceSheet";
import { BalanceSheetTable } from "./balance-sheet";
import { getTicmiIncomeStatement } from "../../../_server/getTicmiIncomeStatement";
import { IncomeStatementTable } from "./income-statement";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type TSecondScreen = {
  stockCode: string;
};

export const SecondScreen = async ({ stockCode }: TSecondScreen) => {
  const marketInfo = await getTicmiAnnualMarketInfo(stockCode);
  const balanceSheet = await getTicmiAnnualBalanceSheet(stockCode);
  const incomeStatement = await getTicmiIncomeStatement(stockCode);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <TypographyLarge>Second Screen ({stockCode})</TypographyLarge>
        <Link
          href={`/exchange/stanley/first`}
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Back
        </Link>
      </div>

      <MarketInfoTable data={marketInfo.data} />
      <BalanceSheetTable
        data={balanceSheet.data.data}
        lastUpdate={balanceSheet.data.lastUpdate}
        shareOutstanding={marketInfo.data[0].listedShares}
      />
      <IncomeStatementTable
        data={incomeStatement.data.data}
        lastUpdate={incomeStatement.data.lastUpdate}
        shareOutstanding={marketInfo.data[0].listedShares}
      />
    </div>
  );
};
