import { TypographyLead } from "@/components/ui/typography/lead";
import ExchangeHeaderSheet from "./exchange-header-sheet";

const ExchangeHeader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-1">
        <ExchangeHeaderSheet />
        <TypographyLead>Inception IDX</TypographyLead>
      </div>
    </div>
  );
};

export default ExchangeHeader;
