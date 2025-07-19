import { findAllArticles } from "@/lib/dato/find-all-articles";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const Blog = async () => {
  const articles = await findAllArticles();

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Primepro Indonesia Articles</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {articles.allArticles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="p-2 shadow rounded md:flex gap-4 hover:underline underline-offset-4"
          >
            <Image
              src={article.thumbnail.url}
              width={400}
              height={400}
              alt={article.title}
              className="w-full h-auto object-cover aspect-square md:max-w-20"
            />
            <span>
              <div>
                <h2 className="text-xl font-bold">{article.title}</h2>
                <span>
                  {new Date(article._publishedAt).toLocaleString("id-ID")}
                </span>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="line-clamp-1 text-muted-foreground md:line-clamp-2"
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
