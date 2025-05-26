import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: env.NEXT_PUBLIC_HOST_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/agents",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/franchise",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/properties",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/properties/sitemap.xml",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/properties/paths/sitemap.xml",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
