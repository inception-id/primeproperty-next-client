import { SecondScreen } from "./_components";

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
  return <SecondScreen stockCode={params.second} />;
};
export default StanleySecondScreenPage;
