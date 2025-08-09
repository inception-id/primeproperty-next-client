import { buttonVariants } from "@/components/ui/button";
import { findArticle } from "@/lib/dato/find-article";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import { generateBlogMetadata } from "../_lib/generate-blog-metadata";
import { Metadata } from "next";
import { generateBlogSchema } from "../_lib/generate-blog-schema";

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
  const { article } = await findArticle(params.slug);
  const schema = generateBlogSchema(article);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="py-32">
        <div className="container mx-auto">
          <div className="flex max-w-5xl mr-auto flex-col items-center gap-4 text-center">
            <h1 className="max-w-3xl text-pretty text-5xl font-semibold md:text-6xl">
              {article.title}
            </h1>
            <h3 className="text-muted-foreground max-w-3xl text-lg md:text-xl">
              {article.seo.description}
            </h3>
            <div className="flex items-center gap-3 text-sm md:text-base">
              {new Date(article._publishedAt).toLocaleDateString("id-ID", {
                dateStyle: "short",
              })}
            </div>
            <Image
              src={article.thumbnail.url}
              alt={article.seo.title}
              className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="container mb-4 mx-auto">
          <div
            className="max-w-5xl mr-auto [&_h2]:text-xl [&_h3]:text-lg [&_h2]:font-semibold [&_h3]:font-semibold [&_ol]:list-decimal [&_ul]:list-disc [&_ul]:list-inside whitespace-normal [&_h2]:mb-2 [&_h3]:mb-2 [&_p]:mb-2 [&_ol]:mb-4 [&_ul]:mb-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="container mx-auto">
          <div className="max-w-5xl mr-auto">
            <Link
              href="/blog"
              title="PrimePro Blog"
              aria-label="PrimePro Blog"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <LuChevronLeft />
              See All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSlug;
