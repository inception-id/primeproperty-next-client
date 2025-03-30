import { TypographyLead } from "@/components/ui/typography/lead";
import { getMarketInfo } from "../_server";
import { MarketInfoTable } from "./market-info";
import { BalanceSheetTable } from "./balance-sheet";
import { TypographyMuted } from "@/components/ui/typography/muted";

type TablesProps = {
  code: string;
};

export const Tables = async ({ code }: TablesProps) => {
  const marketInfo = await getMarketInfo(code);
  if (marketInfo.data.length === 0) {
    return <TypographyMuted>Invalid Stock Code</TypographyMuted>;
  }
  return (
    <>
      <TypographyLead>{code}</TypographyLead>
      <MarketInfoTable data={marketInfo.data} />
      <BalanceSheetTable
        listedShares={marketInfo.data[0].listedShares}
        code={code}
      />
    </>
  );
};
