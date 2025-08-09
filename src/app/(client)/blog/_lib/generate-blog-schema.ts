import { Article } from "@/lib/dato/types";
import { env } from "@/lib/env";

export const generateBlogSchema = async (article: Article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    url: `${env.NEXT_PUBLIC_HOST_URL}/blog/${article.slug}`,
    headline: article.title,
    description: article.seo.description,
    image: article.thumbnail.url,
    thumbnailUrl: article.thumbnail.url,
    author: {
      "@type": "Organization",
      name: "PrimePro Indonesia",
    },
    publisher: {
      "@type": "Organization",
      name: "PrimePro Indonesia",
      logo: {
        "@type": "ImageObject",
        url: `${env.NEXT_PUBLIC_HOST_URL}/images/primerp-with-full-text.png`,
      },
    },
    datePublished: new Date(article._publishedAt).toISOString(),
  };
};
