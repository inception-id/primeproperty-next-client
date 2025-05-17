import { Suspense } from "react";
import { Properties } from "./_components";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { Metadata } from "next";
import { generatePropertiesMetadata } from "./_lib/create-properties-metadata";

export const revalidate = 0;

type PropertiesPageProps = {
  searchParams: FindPropertyQuery;
};

export const generateMetadata = async ({
  searchParams,
}: PropertiesPageProps): Promise<Metadata> =>
  generatePropertiesMetadata(searchParams);

const PropertiesPage = ({ searchParams }: PropertiesPageProps) => {
  return (
    <Suspense>
      <Properties searchParams={searchParams} />
    </Suspense>
  );
};

export default PropertiesPage;
