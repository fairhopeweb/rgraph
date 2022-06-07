// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
// import { RApolloProvider } from "@kaushik_varanasi/react-apollo";
import { auth } from "./utils/rockets";
import { UselessProvider } from "./utils/useless/provider";

ReactDOM.render(
  <React.StrictMode>
    <UselessProvider auth={auth} gqlEndpoint="https://hasura-6khqdzs.rocketgraph.app/v1/graphql">
      <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <App />
            </Route>
          </Switch>
      </Router>
    </UselessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);