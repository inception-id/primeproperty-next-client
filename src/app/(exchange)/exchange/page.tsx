"use client";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography/typography-h1";
import { fetchIdxStockScreener } from "../_server/fetchIdxStockScreener";
import { fetchTicmiFinancialRatio } from "../_server/fetchTicmiFinancialRatio";

const ExchangePage = () => {
  const handleClick = async () => {
    try {
      const idxStockScreener = await fetchIdxStockScreener();
      console.log(
        `IDX Stock Screener found: ${idxStockScreener.results.length} results`,
      );

      const ticmiScreener = [];
      for (let i = 0; i < idxStockScreener.results.length; i++) {
        console.log(
          `Analysing no ${i}: ${idxStockScreener.results[i].stockCode}`,
        );
        const ticmi = await fetchTicmiFinancialRatio(
          idxStockScreener.results[i].stockCode,
        );
        if (ticmi.data.length > 0) {
          if (
            ticmi.data.every((ratio) => ratio.NPM > 0.2 && ratio.roe > 0.15)
          ) {
            ticmiScreener.push(idxStockScreener.results[i]);
          }
        }
      }
      console.log(`Ticmi Screener found: ${ticmiScreener.length} results`);
      console.table(ticmiScreener);
      return null;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="p-4">
      <TypographyH1 className="mb-4">Stock Screener</TypographyH1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default ExchangePage;
