import { Suspense } from "react";
import { SecondScreen } from "./_components";
import { TypographyLarge } from "@/components/ui/typography/large";
import { Skeleton } from "@/components/ui/skeleton";

type StanleySecondScreenPageProps = {
  params: {
    second: string | undefined;
  };
};

const StanleySecondScreenPage = async ({
  params,
}: StanleySecondScreenPageProps) => {
  if (!params.second) {
    return <div>Invalid Stock Code</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      <TypographyLarge>
        Second Screen (Does not work for banking and property yet)
      </TypographyLarge>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <SecondScreen stockCode={params.second} />
      </Suspense>
    </div>
  );
};
export default StanleySecondScreenPage;
