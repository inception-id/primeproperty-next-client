import { findAllPropertyAgents } from "@/lib/api/properties/find-all-property-agents";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const agents = await findAllPropertyAgents();
  return [
    {
      url: env.NEXT_PUBLIC_HOST_URL + `/agents`,
      lastModified: new Date(),
    },
    ...(agents.data?.map((agent) => {
      return {
        url:
          env.NEXT_PUBLIC_HOST_URL +
          `/agents/${agent.fullname.replaceAll(" ", "-")}`,
        lastModified: new Date(agent.updated_at),
      };
    }) as MetadataRoute.Sitemap),
  ];
}
