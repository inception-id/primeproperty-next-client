import {
  findProperties,
  FindPropertyQuery,
} from "@/lib/api/properties/find-properties";
import { PropertyList } from "./list";
import { Pagination } from "./pagination";
import { PropertiesFilter } from "./fillters/properties-filter";
import { PropertiesTitle } from "./title";
import { PropertyNotFound } from "./not-found";
import { createPropertySchema } from "../_lib/create-properties-schema";
import { Faq } from "./faq";

type PropertiesProps = {
  searchParams: FindPropertyQuery;
};

export const Properties = async ({ searchParams }: PropertiesProps) => {
  const properties = await findProperties(searchParams);
  if (!properties.data?.data) {
    return <PropertyNotFound searchParams={searchParams} />;
  }

  const jsonLd = createPropertySchema(properties?.data.data, searchParams);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PropertiesFilter searchParams={searchParams} />
      <div className="container mx-auto flex flex-col gap-4 p-4 lg:px-2">
        <div className="flex items-center justify-between">
          <PropertiesTitle
            propertyCount={properties.data.total_data}
            searchParams={searchParams}
          />
          <div className="hidden lg:flex text-xs">
            Halaman {searchParams.page ? searchParams.page : 1} dari{" "}
            {properties.data.total_pages}
          </div>
        </div>
        <PropertyList
          searchParams={searchParams}
          propertiesWithAgent={properties.data?.data}
        />

        <Pagination
          searchParams={searchParams}
          currentPage={searchParams.page ? +searchParams.page : 1}
          totalPages={properties.data.total_pages}
        />

        <Faq />
      </div>
    </>
  );
};
