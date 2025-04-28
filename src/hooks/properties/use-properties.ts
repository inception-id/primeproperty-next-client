import {
  findProperties,
  FindPropertyQuery,
} from "@/lib/api/properties/find-properties";
import { useQuery } from "@tanstack/react-query";

export const useProperties = (query?: FindPropertyQuery) => {
  const useQueryKey = "properties";
  return useQuery({
    gcTime: 0,
    queryKey: [useQueryKey, query],
    queryFn: async () => await findProperties(query),
  });
};
