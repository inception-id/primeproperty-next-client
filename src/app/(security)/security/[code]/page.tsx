import { TypographyMuted } from "@/components/ui/typography/muted";
import { Tables } from "./_components";

type DynamicSecurityPageProps = {
  params: {
    code: string;
  };
};

const DynamicSecurityPage = ({ params }: DynamicSecurityPageProps) => {
  if (!params.code || params.code.length > 4)
    return <TypographyMuted>Invalid security code</TypographyMuted>;
  return (
    <>
      <Tables code={params.code.toUpperCase()} />
    </>
  );
};

export default DynamicSecurityPage;
