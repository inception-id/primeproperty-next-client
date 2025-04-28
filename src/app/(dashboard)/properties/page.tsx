import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { PropertiesTable, PropertyFilter } from "./_components";

export const revalidate = 0;
type PropertiesPageProps = {
  searchParams: FindPropertyQuery;
};
const PropertiesPage = ({ searchParams }: PropertiesPageProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      <PropertyFilter searchParams={searchParams} />
      <PropertiesTable searchParams={searchParams} />
    </div>
  );
};

export default PropertiesPage;
