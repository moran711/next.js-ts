import ApolloClient from "apollo-boost";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache({ addTypename: false }),
});
