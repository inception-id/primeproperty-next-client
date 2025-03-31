import { TypographyMuted } from "@/components/ui/typography/muted";
import { FinancialStatement } from "./_components";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type DynamicSecurityPageProps = {
  params: {
    code: string;
  };
};

const DynamicSecurityPage = ({ params }: DynamicSecurityPageProps) => {
  if (!params.code || params.code.length > 4)
    return <TypographyMuted>Invalid security code</TypographyMuted>;
  return (
    <Suspense fallback={<Skeleton className="w-full h-96" />}>
      <FinancialStatement code={params.code.toUpperCase()} />
    </Suspense>
  );
};

export default DynamicSecurityPage;
