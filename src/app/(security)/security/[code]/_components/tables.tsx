import { TypographyLead } from "@/components/ui/typography/lead";
import { getMarketInfo } from "../_server";
import { MarketInfoTable } from "./market-info";

type TablesProps = {
  code: string;
};

export const Tables = async ({ code }: TablesProps) => {
  const marketInfo = await getMarketInfo(code);
  return (
    <>
      <TypographyLead>{code}</TypographyLead>
      <MarketInfoTable data={marketInfo.data} />
    </>
  );
};
