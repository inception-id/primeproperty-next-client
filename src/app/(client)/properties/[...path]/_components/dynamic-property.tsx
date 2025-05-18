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
      <div className="flex flex-col gap-8 lg:flex-row p-4">
        <PropertyOverview property={property.data} />
        <div className="flex flex-col gap-8 lg:sticky lg:top-4 h-fit">
          <AgentCard property={property.data} />
          <ShareLinks title={property.data[0].title} />
        </div>
      </div>
    </div>
  );
};
