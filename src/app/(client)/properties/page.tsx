import { Suspense } from "react";
import { Properties } from "./_components";

export const revalidate = 0;

const PropertiesPage = () => {
  return (
    <Suspense>
      <Properties />
    </Suspense>
  );
};

export default PropertiesPage;
