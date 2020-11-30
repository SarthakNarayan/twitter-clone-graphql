import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "../styles/App.css";

// Components import
import Navbar from "./Navbar";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graphql",
});

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ApolloProvider client={client}>
          <div className="container">
            <Route exact path="/" component={TweetList} />
            <Route exact path="/create" component={CreateTweet} />
          </div>
        </ApolloProvider>
      </Switch>
    </Router>
  );
};

export default App;
