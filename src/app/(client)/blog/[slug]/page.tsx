import { findArticle } from "@/lib/dato/find-article";
import Image from "next/image";
import { generateBlogMetadata } from "../_lib/generate-blog-metadata";
import { Metadata } from "next";
import { generateBlogSchema } from "../_lib/generate-blog-schema";
import { BlogPost } from "./_components/blog-post";
import { BlogRelated } from "./_components/blog-related";

export const revalidate = 0;

type BlogSlugProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: BlogSlugProps): Promise<Metadata> => generateBlogMetadata(params.slug);

const BlogSlug = async ({ params }: BlogSlugProps) => {
  const { article, allArticles } = await findArticle(params.slug);
  const schema = generateBlogSchema(article);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col gap-4 font-sans">
        <div className="w-full h-48 md:h-96 relative">
          <Image
            src={article.thumbnail.url}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container flex flex-col gap-4 p-4 mx-auto md:flex-row md:justify-between">
          <BlogPost article={article} />
          <BlogRelated slug={params.slug} allArticles={allArticles} />
        </div>
      </div>
    </>
  );
};

export default BlogSlug;
