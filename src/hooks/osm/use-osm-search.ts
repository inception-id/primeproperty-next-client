import { searchOsm } from "@/lib/osm/search-osm";
import { useQuery } from "@tanstack/react-query";

export const useOsmSearch = (keyword: string) => {
  const useQueryKey = "osm-search";
  return useQuery({
    queryKey: [useQueryKey, keyword],
    queryFn: async () => {
      if (!keyword) return [];
      return await searchOsm(keyword);
    },
  });
};
