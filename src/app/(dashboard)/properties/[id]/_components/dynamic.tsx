"use client";

import { EditPropertyForm } from "./form";
import { useAgentTokenData } from "@/hooks/agents/use-agent-token-data";
import { AgentRole } from "@/lib/api/agents/type";
import { useQuery } from "@tanstack/react-query";
import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { useStore } from "../../_stores";
import { useShallow } from "zustand/react/shallow";

type DynamicPropertyProps = {
  id: string;
};

export const DynamicProperty = ({ id }: DynamicPropertyProps) => {
  const setStore = useStore(useShallow((state) => state.setStore));
  const agent = useAgentTokenData();
  const property = useQuery({
    gcTime: 0,
    queryKey: ["property", id],
    queryFn: async () => {
      const propertyWithAgent = await findPropertyById(+id);
      if (propertyWithAgent.data) {
        setStore("selectedFacilities", propertyWithAgent.data?.[0].facilities);
        setStore("images", propertyWithAgent.data?.[0].images);
      } else {
        setStore("selectedFacilities", []);
        setStore("images", []);
      }
      return propertyWithAgent;
    },
  });
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
