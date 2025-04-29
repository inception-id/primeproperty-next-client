"use client";

import { usePropertyById } from "@/hooks/properties";
import { EditPropertyForm } from "./form";
import { useAgentTokenData } from "@/hooks/agents/use-agent-token-data";
import { AgentRole } from "@/lib/api/agents/type";

type DynamicPropertyProps = {
  id: string;
};

export const DynamicProperty = ({ id }: DynamicPropertyProps) => {
  const agent = useAgentTokenData();
  const property = usePropertyById(+id);
  if (agent.isLoading || property.isLoading) {
    return <div className="animate-bounce">Loading...</div>;
  }

  if (
    !property.data?.data ||
    (!property.data?.data[0].is_deleted && agent.data?.role !== AgentRole.Admin)
  ) {
    return <div>Property not found</div>;
  }

  return <EditPropertyForm propertyWithAgent={property.data?.data} />;
};
