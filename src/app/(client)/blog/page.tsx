import { findAllArticles } from "@/lib/dato/find-all-articles";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Metadata } from "next";
import { env } from "@/lib/env";

export const revalidate = 0;
export const metadata: Metadata = {
  title: "PrimePro Indonesia Articles",
  description: "Temukan tren, tips dan trik dalam pemilihan properti terbaik.",
  alternates: {
    canonical: `${env.NEXT_PUBLIC_HOST_URL}/blog`,
  },
};

const Blog = async () => {
  const articles = await findAllArticles();

  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            PrimePro Indonesia Articles
          </h1>
          <h2 className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Temukan tren, tips dan trik dalam pemilihan properti terbaik.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.allArticles.map((article) => (
            <Card
              key={article.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <Link
                  href={`/blog/${article.slug}`}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                  title={article.seo.title}
                >
                  <Image
                    src={article.thumbnail.url}
                    alt={article.title}
                    className="h-full w-full object-cover object-center"
                    width={400}
                    height={400}
                  />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link
                    target="_blank"
                    title={article.seo.title}
                    href={`/blog/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <div
                  className="text-muted-foreground line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${article.slug}`}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                  title={article.seo.title}
                >
                  Read more
                  <LuArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
