import { findAgents, FindAgentsQuery } from "@/lib/api/agents/find-agents";
import { useQuery } from "@tanstack/react-query";

export const useAgents = (query?: FindAgentsQuery) => {
  const useQueryKey = "agents";
  return useQuery({
    gcTime: 0,
    queryKey: [useQueryKey, query],
    queryFn: async () => await findAgents(query),
  });
};
