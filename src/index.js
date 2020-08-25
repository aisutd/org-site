import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Main from "views/Main/Main";
import TeamPage from "views/TeamPage/TeamPage";
import AboutPage from "views/AboutPage/AboutPage";
import EventsPage from "views/EventsPage/EventsPage";
import ConceptsPage from "views/ConceptsPage/ConceptsPage";
import AIMPage from "views/AIMPage/AIMPage";
import JoinPage from "views/JoinPage/JoinList";
import ErrorPage from "views/ErrorPage/ErrorPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/about" component={AboutPage} />
      {/* <Route exact path="/concepts" component={ConceptsPage} /> */}
      {/* <Route exact path="/aim" component={AIMPage} /> */}
      <Route exact path="/" component={Main} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
