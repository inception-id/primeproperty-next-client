import { findArticle } from "@/lib/dato/find-article";
import { env } from "@/lib/env";
import { Metadata } from "next";

export const generateBlogMetadata = async (slug: string): Promise<Metadata> => {
  const { article } = await findArticle(slug);
  return {
    title: article.seo.title,
    description: article.seo.description,
    twitter: {
      title: article.seo.title,
      site: "@primeproindonesia",
      creator: "@primeproindonesia",
      card: "summary_large_image",
      images: [article.thumbnail.url],
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      siteName: "Primepro Indonesia",
      locale: "id_ID",
    },
    appleWebApp: true,
    applicationName: "Primepro Indonesia",
    alternates: {
      canonical: `${env.NEXT_PUBLIC_HOST_URL}/blog/${slug}`,
    },
    robots: "index, follow",
  };
};
