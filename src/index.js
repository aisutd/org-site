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
  <Router basename={process.env.PUBLIC_URL} history={hist}>
    <Switch>
      <Route
        exact
        path="/live"
        component={() => {
          window.location = "https://youtu.be/pPNQoA1OpNQ";
        }}
      />
      <Route
        exact
        path="/apply"
        component={() => {
          window.location = "https://aisutd.typeform.com/to/nSDVzzan";
        }}
      />
      <Route
        exact
        path="/fb"
        component={() => {
          window.location = "https://www.facebook.com/groups/aisutd";
        }}
      />
      <Route
        exact
        path="/insta"
        component={() => {
          window.location = "https://www.instagram.com/utdais/";
        }}
      />
      <Route
        exact
        path="/linkedin"
        component={() => {
          window.location = "https://www.linkedin.com/company/ais-utd/";
        }}
      />
      <Route
        exact
        path="/discord"
        component={() => {
          window.location = "https://discord.gg/7fZQZyP";
        }}
      />
      <Route
        exact
        path="/kickoff"
        component={() => {
          window.location = "https://youtu.be/YP9pgvId_ZU";
        }}
      />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/about" component={AboutPage} />
      {/* <Route exact path="/concepts" component={ConceptsPage} /> */}
      <Route
        exact
        path="/aim"
        component={() => {
          window.location =
            "https://coda.io/form/AIM-Fall-2021-Mentee-Application_dDlWrs9O7kG";
        }}
      />
      <Route
        exact
        path="/w/intro-to-ai-2021"
        component={() => {
          window.location = "https://youtu.be/R3a_k-9TvNA";
        }}
      />
      <Route
        exact
        path="/w/movie-review-analysis"
        component={() => {
          window.location = "https://youtu.be/iD9fxZUcddc";
        }}
      />
      <Route
        exact
        path="/w/emorecom"
        component={() => {
          window.location = "https://youtu.be/4XAO4IOH5ks";
        }}
      />
      <Route
        exact
        path="/w/nlp-tutorial-1"
        component={() => {
          window.location = "https://youtu.be/qTyjPoIfAN0";
        }}
      />
      <Route
        exact
        path="/w/genetic-algorithms"
        component={() => {
          window.location = "https://youtu.be/FQKvaT-mWOk";
        }}
      />
      <Route
        exact
        path="/w/adv-attack"
        component={() => {
          window.location =
            "https://teams.microsoft.com/l/meetup-join/19%3Ameeting_ZDdmMjczNDQtZmZiMi00OTllLWJhNDUtZDhjMGY4ZTM5OTI2%40thread.v2/0?context=%7B%22Tid%22%3A%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2C%22Oid%22%3A%2218e0aff9-3f8a-4b1b-89b4-518d351055ae%22%2C%22MessageId%22%3A%220%22%7D";
        }}
      />
      <Route
        exact
        path="/w/license-plate-cv"
        component={() => {
          window.location = "https://youtu.be/HeARqEDmZC8";
        }}
      />
      <Route exact path="/" component={Main} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
