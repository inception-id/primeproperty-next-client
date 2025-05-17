import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PropertyOverview } from "./property-overview";
import { AgentCard } from "./agent-card";
import { PropertyImages } from "./property-images";
import { PropertyNotFound } from "../../_components/not-found";
import { ShareLinks } from "./share-links";

type DynamicPropertyProps = {
  propertyId: number;
};

export const DynamicProperty = async ({ propertyId }: DynamicPropertyProps) => {
  const property = await findPropertyById(propertyId);

  if (!property.data) {
    return <PropertyNotFound searchParams={{}} />;
  }
  return (
    <div>
      <PropertyImages propertyWithAgent={property.data} />
      <div className="p-4 lg:px-0 flex flex-col gap-4 md:flex-row md:justify-between md:gap-16 relative">
        <PropertyOverview property={property.data} />
        <div className="flex flex-col gap-4 md:sticky md:top-4">
          <AgentCard property={property.data} />
          <ShareLinks title={property.data[0].title} />
        </div>
      </div>
    </div>
  );
};
