import {
  findProperties,
  FindPropertyQuery,
} from "@/lib/api/properties/find-properties";
import { PropertyList } from "./list";
import { Input } from "@/components/ui/input";
import { Pagination } from "./pagination";

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
    <div className="md:pb-4">
      <div className="bg-secondary p-2 px-4">
        <div className="container mx-auto">
          <Input placeholder="Cari" />
        </div>
      </div>
      <div className="container mx-auto px-4 pt-2 pb-4 flex flex-col gap-6">
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
