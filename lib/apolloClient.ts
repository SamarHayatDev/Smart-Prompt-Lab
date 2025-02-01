import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { nhost } from "./nhost";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL,
});

// const authLink = setContext((_, { headers }) => {
//   const token = nhost.auth.getAccessToken();
//   return {
//     headers: {
//       ...headers,
//       ...(token && { authorization: `Bearer ${token}` }),
//     },
//   };
// });
const authLink = setContext(async (_, { headers }) => {
  const token = await nhost.auth.getAccessToken();
  console.log("token:", token);
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});
