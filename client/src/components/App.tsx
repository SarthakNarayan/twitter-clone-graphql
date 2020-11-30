import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/App.css";

// Components import
import Navbar from "./Navbar";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/" component={TweetList} />
          <Route exact path="/create" component={CreateTweet} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
