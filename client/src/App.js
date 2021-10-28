import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./state/GlobalState";
import AuthedRoute from "./utils/AuthedRoute";
import Admin from "./pages/Admin";
import Agent from "./pages/Agent";
import Manager from "./pages/Manager";
import Profile from "./pages/Profile";
import NewClient from "./pages/NewClient";
import FeeInformation from "./pages/FeeInformation";
import currentApp from "./pages/currentApp";
import ProgressApp from "./pages/ProgressApp";
import ChangeAgent from "./pages/ChangeAgent";
import CompletedApplication from "./pages/CompletedApplication";
import  EMS  from "./pages/EMS";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

            <AuthedRoute path="/manager" requiredRole="manager" >
              <Manager />        
              <Switch>
                <Route exact path="/manager/NewClient" component={NewClient} />
                <Route exact path="/manager/FeeInformation" component={FeeInformation} />
                <Route exact path="/manager/currentapplication" component={currentApp} />
                <Route exact path="/manager/appinprogress" component={ProgressApp} />
                <Route exact path="/manager/agentupdate" component={ChangeAgent} />
                <Route exact path="/manager/ems" component={EMS} />
                
               </Switch>
            </AuthedRoute>

            <AuthedRoute path="/admin/" requiredRole="admin">
              <Admin />
              {/* <Profile /> */}
               
           
            </AuthedRoute>

            <AuthedRoute path="/agent" requiredRole="agent">
              <Agent />
              <Profile />
            </AuthedRoute>

            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
