import { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  gql,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./components/GetUsers";
import Form from "./components/Form";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  ResetPassword,
  Login,
  CreateAccount,
  Auth,
  CreateNewPassword,
  ConfirmOTP,
} from "./components";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://travelbay-9vyj.onrender.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Form /> */}
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/createnewpassword" element={<CreateNewPassword />} />
          <Route path="/confirmotp" element={<ConfirmOTP />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
