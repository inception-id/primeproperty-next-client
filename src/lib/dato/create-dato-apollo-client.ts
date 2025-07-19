import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "../env";

export const createDatoApolloClient = () => {
  return new ApolloClient({
    uri: env.DATOCMS_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${env.DATOCMS_API_TOKEN}`,
      "X-Api-Version": "3",
    },
    cache: new InMemoryCache(),
  });
};
