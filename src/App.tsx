import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, useParams } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
