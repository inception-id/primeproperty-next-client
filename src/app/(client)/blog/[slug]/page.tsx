import { findArticle } from "@/lib/dato/find-article";
import Image from "next/image";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import { Faq } from "../../properties/_components/faq";

type BlogSlugProps = {
  params: {
    slug: string;
  };
};

const BlogSlug = async ({ params }: BlogSlugProps) => {
  const { article } = await findArticle(params.slug);
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <Link
        href="/blog"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <LuChevronLeft />
        See all articles
      </Link>

      <Image
        className=""
        src={article.thumbnail.url}
        width={500}
        height={500}
        alt={article.title}
      />
      <p className="text-muted-foreground">
        {new Date(article._publishedAt).toLocaleString()}
      </p>
      <h1 className="font-bold text-3xl">{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <Faq />
    </div>
  );
};

export default BlogSlug;
