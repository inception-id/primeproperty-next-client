import { findProperties } from "@/lib/api/properties/find-properties";
import { PropertyList } from "./list";
import { Input } from "@/components/ui/input";

export const Properties = async () => {
  const properties = await findProperties();
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
      <div className="container mx-auto px-4 py-2 flex flex-col gap-4">
        <h1 className="py-2 flex gap-1 text-sm justify-center md:text-base md:justify-start">
          Menampilkan
          <b>{properties.data.total_data} properti dijual</b>
          di
          <b>Indonesia</b>
        </h1>
        <PropertyList propertiesWithAgent={properties.data?.data} />
      </div>
    </div>
  );
};
