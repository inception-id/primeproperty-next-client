import { gql } from "@apollo/client";
import { createDatoApolloClient } from "./create-dato-apollo-client";
import { Article } from "./types";

const ARTICLES_QUERY = gql`
  query {
    allArticles(orderBy: _publishedAt_DESC, first: 500) {
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

export const findAllArticles = async (): Promise<{
  allArticles: Article[];
}> => {
  try {
    const client = createDatoApolloClient();
    const { data } = await client.query({
      query: ARTICLES_QUERY,
    });
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
