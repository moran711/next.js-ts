import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
  uri: process.env.SERVER_URI,
  cache: new InMemoryCache({ addTypename: false }),
});
``;