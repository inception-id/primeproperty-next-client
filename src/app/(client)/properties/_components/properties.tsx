import {
  findProperties,
  FindPropertyQuery,
} from "@/lib/api/properties/find-properties";
import { PropertyList } from "./list";
import { Pagination } from "./pagination";
import { PropertiesFilter } from "./fillters/properties-filter";

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
      <PropertiesFilter />
      <div className="container mx-auto px-4 pt-2 pb-8 md:py-4 flex flex-col md:gap-4 ">
        <h1 className="py-2 flex gap-1 text-sm justify-center md:text-base md:justify-start">
          Menampilkan
          <b>{properties.data.total_data} properti dijual</b>
          di
          <b>Indonesia</b>
        </h1>
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
