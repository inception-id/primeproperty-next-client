import { findBpsDomainProvince } from "@/lib/bps/find-bps-domain-province";
import { useQuery } from "@tanstack/react-query";

export const useProvince = () => {
  const useQueryKey = "province";
  return useQuery({
    queryKey: [useQueryKey],
    queryFn: async () => {
      return await findBpsDomainProvince();
    },
  });
};
