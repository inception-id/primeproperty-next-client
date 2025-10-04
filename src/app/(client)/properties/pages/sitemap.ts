import { findProperties } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  const properties = await findProperties({ limit: String(30) });
  // Fetch the total number of products and calculate the number of sitemaps needed
  if (properties.data && properties.data?.total_pages > 0) {
    return Array.from({ length: properties.data.total_pages }).map(
      (_, index) => {
        return { id: index + 1 };
      },
    );
  }
  return [{ id: 1 }];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const properties = await findProperties({ page: String(id) });
  return properties.data?.data.map((property) => {
    return {
      url: env.NEXT_PUBLIC_HOST_URL + `/properties/${property[0].id}`,
      lastModified: new Date(property[0].updated_at),
    };
  }) as MetadataRoute.Sitemap;
}
