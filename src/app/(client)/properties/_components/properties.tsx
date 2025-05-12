import {
  findProperties,
  FindPropertyQuery,
} from "@/lib/api/properties/find-properties";
import { PropertyList } from "./list";
import { Pagination } from "./pagination";
import { PropertiesFilter } from "./fillters/properties-filter";
import { PropertiesTitle } from "./title";

type PropertiesProps = {
  searchParams: FindPropertyQuery;
};

export const Properties = async ({ searchParams }: PropertiesProps) => {
  const properties = await findProperties(searchParams);
  // TODO: Error handling
  if (!properties.data?.data) {
    return <>Error</>;
  }
  return (
    <div>
      <PropertiesFilter searchParams={searchParams} />
      <div className="container mx-auto px-4 md:px-2 flex flex-col ">
        <PropertiesTitle
          propertyCount={properties.data.total_data}
          searchParams={searchParams}
        />
        <PropertyList propertiesWithAgent={properties.data?.data} />
        <Pagination
          searchParams={searchParams}
          currentPage={searchParams.page ? +searchParams.page : 1}
          totalPages={properties.data.total_pages}
        />
      </div>
    </div>
  );
};
