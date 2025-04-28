import { getAgentTokenData } from "@/lib/cookie/get-agent-token-data";
import { useQuery } from "@tanstack/react-query";

export const useAgentTokenData = () => {
  return useQuery({
    queryKey: ["agent-token-data"],
    queryFn: async () => {
      return await getAgentTokenData();
    },
  });
};
