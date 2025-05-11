import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { FilterDialog } from "./dialog";
import { Search } from "./search";

type PropertiesFilterProps = {
  searchParams: FindPropertyQuery;
};

export const PropertiesFilter = ({ searchParams }: PropertiesFilterProps) => {
  return (
    <div className="bg-secondary p-2 px-4">
      <div className="flex items-center gap-2">
        <Search />
        <FilterDialog searchParams={searchParams} />
      </div>
      <div className="container mx-auto">
        {/* <Input placeholder="Lokasi, keyword, area" /> */}
      </div>
    </div>
  );
};
