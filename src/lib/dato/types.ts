export type Article = {
  id: string;
  thumbnail: {
    url: string;
  };
  title: string;
  content: string;
  slug: string;
  _publishedAt: string;
  seo: {
    title: string;
    description: string;
  };
};
