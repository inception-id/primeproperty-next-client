import { findAgentBySupertokensId } from "@/lib/api/agents/find-agent-by-supertokens-id";
import { getAgentTokenData } from "@/lib/cookie/get-agent-token-data";
import { useQuery } from "@tanstack/react-query";

export const useAgentBySupertokensId = () => {
  const useQueryKey = "agents-by-supertokens-id";
  return useQuery({
    gcTime: 0,
    queryKey: [useQueryKey],
    queryFn: async () => {
      try {
        const agentTokenData = await getAgentTokenData();
        if (agentTokenData) {
          return await findAgentBySupertokensId(
            agentTokenData.supertokens_user_id,
          );
        }
        return null;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });
};
