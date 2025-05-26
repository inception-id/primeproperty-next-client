import { findPropertiesSitePaths } from "@/lib/api/properties/find-properties-site-paths";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitePaths = await findPropertiesSitePaths();
  if (sitePaths.data && sitePaths?.data?.length > 0) {
    return sitePaths.data.map((path) => {
      return {
        url: env.NEXT_PUBLIC_HOST_URL + "/properties" + path,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1.0,
      };
    });
  }

  return [
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/properties/dijual",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
