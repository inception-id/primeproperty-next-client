import { FilterDialog } from "./dialog";
import { Search } from "./search";
export const PropertiesFilter = () => {
  return (
    <div className="bg-secondary p-2 px-4">
      <div className="flex items-center gap-2">
        <Search />
        <FilterDialog />
      </div>
      <div className="container mx-auto">
        {/* <Input placeholder="Lokasi, keyword, area" /> */}
      </div>
    </div>
  );
};
