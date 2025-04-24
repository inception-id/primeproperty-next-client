import { findBpsDomainProvinceRegency } from "@/lib/bps/find-bps-domain-province-regency";
import { useQuery } from "@tanstack/react-query";

export const useProvinceRegency = (provinceId: string) => {
  const useQueryKey = "province-regency";
  return useQuery({
    queryKey: [useQueryKey, provinceId],
    queryFn: async () => {
      if (!provinceId) return [];
      return await findBpsDomainProvinceRegency(provinceId);
    },
  });
};
