import { gql } from "@apollo/client";
import { createDatoApolloClient } from "./create-dato-apollo-client";
import { Article } from "./types";

const ARTICLE_QUERY = gql`
  query FindArticleBySlug($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      id
      thumbnail {
        url
      }
      title
      content(markdown: true)
      slug
      _publishedAt
      seo {
        title
        description
      }
    }
  }
`;

export const findArticle = async (
  slug: string,
): Promise<{
  article: Article;
}> => {
  try {
    const client = createDatoApolloClient();
    const { data } = await client.query({
      query: ARTICLE_QUERY,
      variables: {
        slug,
      },
    });
    return data;
  } catch (error) {
    console.error(`Error fetching article ${slug}:`, error);
    throw error;
  }
};
