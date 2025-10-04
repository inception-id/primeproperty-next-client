import { findProperties } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const properties = await findProperties({ limit: String(30) });
  // Fetch the total number of products and calculate the number of sitemaps needed
  if (properties.data && properties.data?.total_pages > 0) {
    return Array.from({ length: properties.data.total_pages }).map(
      (_, index) => {
        return {
          url:
            env.NEXT_PUBLIC_HOST_URL +
            `/properties/pages/sitemap/${index + 1}.xml`,
          lastModified: new Date(),
        };
      },
    );
  }

  return [
    {
      url: env.NEXT_PUBLIC_HOST_URL + `/properties/pages/sitemap/1.xml`,
      lastModified: new Date(),
    },
  ];
}
