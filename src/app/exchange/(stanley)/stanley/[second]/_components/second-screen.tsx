import { TypographyLarge } from "@/components/ui/typography/large";
import { getTicmiAnnualMarketInfo } from "../../../_server/getTicmiAnnualMarketInfo";
import { MarketInfoTable } from "./market-info";

type TSecondScreen = {
  stockCode: string;
};

export const SecondScreen = async ({ stockCode }: TSecondScreen) => {
  const marketInfo = await getTicmiAnnualMarketInfo(stockCode);
  return (
    <div className="flex flex-col gap-4">
      <TypographyLarge>Second Screen ({stockCode})</TypographyLarge>

      <MarketInfoTable data={marketInfo.data} />
    </div>
  );
};
