import { findPropertiesSitePaths } from "@/lib/api/properties/find-properties-site-paths";
import { useQuery } from "@tanstack/react-query";

export const usePropertiesSitePaths = () => {
  const useQueryKey = "properties-site-paths";
  return useQuery({
    queryKey: [useQueryKey],
    queryFn: async () => await findPropertiesSitePaths(),
  });
};
