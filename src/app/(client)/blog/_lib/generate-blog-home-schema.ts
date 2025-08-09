import { Article } from "@/lib/dato/types";
import { env } from "@/lib/env";

export const generateBlogHomeSchema = (articles: Article[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PrimePro Indonesia Blog",
    url: `${env.NEXT_PUBLIC_HOST_URL}/blog`,
    description: "Tren, tips dan trik dalam pemilihan properti terbaik",
    image: `${env.NEXT_PUBLIC_HOST_URL}/image/primepro-with-full-text.png`,
    publisher: {
      "@type": "Organization",
      name: "PrimePro Indonesia",
      url: `${env.NEXT_PUBLIC_HOST_URL}`,
      logo: {
        "@type": "ImageObject",
        url: `${env.NEXT_PUBLIC_HOST_URL}/image/primepro-with-full-text.png`,
      },
    },
    author: {
      "@type": "Organization",
      name: "PrimePro Indonesia",
      url: `${env.NEXT_PUBLIC_HOST_URL}`,
    },
    article: articles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      datePublished: new Date(article._publishedAt).toISOString(),
      author: {
        "@type": "Organization",
        name: "PrimePro Indonesia",
        url: `${env.NEXT_PUBLIC_HOST_URL}`,
      },
      publisher: {
        "@type": "Organization",
        name: "PrimePro Indonesia",
        url: `${env.NEXT_PUBLIC_HOST_URL}`,
        logo: {
          "@type": "ImageObject",
          url: `${env.NEXT_PUBLIC_HOST_URL}/image/primepro-with-full-text.png`,
        },
      },
      image: {
        "@type": "ImageObject",
        url: article.thumbnail.url,
      },
    })),
  };

  return schema;
};
