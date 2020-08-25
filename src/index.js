import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Main from "views/Main/Main";
import TeamPage from "views/TeamPage/TeamPage";
import AboutPage from "views/AboutPage/AboutPage";
import EventsPage from "views/EventsPage/EventsPage";
import ConceptsPage from "views/ConceptsPage/ConceptsPage";
import AIMPage from "views/AIMPage/AIMPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/concepts" component={ConceptsPage} />
      <Route path="/aim" component={AIMPage} />
      <Route path="/" component={Main} />
    </Switch>
  </Router>,
  document.getElementById("root")
);