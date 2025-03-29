import { TypographyLarge } from "@/components/ui/typography/large";
import { TypographySmall } from "@/components/ui/typography/small";
import { Suspense } from "react";
import { FirstScreen } from "./_components";
import { Skeleton } from "@/components/ui/skeleton";

const StanleyFirstScreenerPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TypographyLarge>Stanley First Screener</TypographyLarge>
      <div>
        <TypographySmall>Criteria</TypographySmall>
        <ul>
          <li>PBV &gt; 0</li>
          <li>PER &gt; 0</li>
          <li>ROE &gt; 15%</li>
          <li>NPM &gt; 20%</li>
          <li>DER &lt; 1</li>
        </ul>
      </div>

      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <FirstScreen />
      </Suspense>
    </div>
  );
};

export default StanleyFirstScreenerPage;
