import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PropertyOverview } from "./property-overview";
import { AgentCard } from "./agent-card";

type DynamicPropertyProps = {
  propertyId: number;
};

export const DynamicProperty = async ({ propertyId }: DynamicPropertyProps) => {
  const property = await findPropertyById(propertyId);

  if (!property.data) {
    return <>Search</>;
  }
  return (
    <div>
      <div className="p-4 flex flex-col gap-4 md:flex-row md:justify-between md:gap-16 relative">
        <PropertyOverview property={property.data} />
        <AgentCard property={property.data} />
      </div>
    </div>
  );
};
