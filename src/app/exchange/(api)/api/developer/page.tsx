import { DeveloperPage } from "./_components";
import { Suspense } from "react";

export const revalidate = 0;

const ExchangeApiDeveloperPage = () => {
  return (
    <div className="p-2 md:px-0">
      <Suspense>
        <DeveloperPage />
      </Suspense>
    </div>
  );
};

export default ExchangeApiDeveloperPage;
