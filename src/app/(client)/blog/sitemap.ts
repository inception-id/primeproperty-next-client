import { findAllArticles } from "@/lib/dato/find-all-articles";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { allArticles } = await findAllArticles();
  const articlesSitemap = allArticles.map((article) => {
    return {
      url: env.NEXT_PUBLIC_HOST_URL + "/blog/" + article.slug,
      lastModified: new Date(article._publishedAt).toLocaleString(),
    };
  });

  return [
    {
      url: env.NEXT_PUBLIC_HOST_URL + "/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    ...articlesSitemap,
  ];
}
