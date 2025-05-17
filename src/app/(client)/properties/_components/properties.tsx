import {
  findProperties,
  FindPropertyQuery,
} from "@/lib/api/properties/find-properties";
import { PropertyList } from "./list";
import { Pagination } from "./pagination";
import { PropertiesFilter } from "./fillters/properties-filter";
import { PropertiesTitle } from "./title";
import { PropertyNotFound } from "./not-found";

type PropertiesProps = {
  searchParams: FindPropertyQuery;
};

export const Properties = async ({ searchParams }: PropertiesProps) => {
  const properties = await findProperties(searchParams);
  if (!properties.data?.data) {
    return <PropertyNotFound searchParams={searchParams} />;
  }

  return (
    <>
      <PropertiesFilter searchParams={searchParams} />
      <div className="container mx-auto flex flex-col gap-4 p-4 lg:px-0">
        <PropertiesTitle
          propertyCount={properties.data.total_data}
          searchParams={searchParams}
        />
        <PropertyList
          searchParams={searchParams}
          propertiesWithAgent={properties.data?.data}
        />
        <Pagination
          searchParams={searchParams}
          currentPage={searchParams.page ? +searchParams.page : 1}
          totalPages={properties.data.total_pages}
        />
      </div>
    </>
  );
};
