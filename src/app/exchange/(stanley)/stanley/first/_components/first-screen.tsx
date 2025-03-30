"use client";
import { useQuery } from "@tanstack/react-query";
import { screenIdx } from "../../../_server/screenIdx";
import { getIndexList } from "../../../_server/getIndexList";

export const FirstScreen = () => {
  const { data } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["screenIdx"],
    queryFn: async () => {
      try {
        const index = await getIndexList();

        console.log("Index list response json", index);
        const stocks = await screenIdx();

        console.log("Screen IDX response json", stocks);
        return "hi";
      } catch (e) {
        console.error("Use Query error", e);
      }
    },
  });
  return <>{data}</>;
  // return <ScreenTable data={stocks.results} />;
};
