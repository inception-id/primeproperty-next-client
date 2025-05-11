import { Suspense } from "react";
import { Properties } from "./_components";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";

export const revalidate = 0;

type PropertiesPageProps = {
  searchParams: FindPropertyQuery;
};

const PropertiesPage = ({ searchParams }: PropertiesPageProps) => {
  return (
    <Suspense>
      <Properties searchParams={searchParams} />
    </Suspense>
  );
};

export default PropertiesPage;
