import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oabwkw1l9301xx6f0b45bp/master',
    cache: new InMemoryCache()
});