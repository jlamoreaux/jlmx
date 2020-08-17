import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
// import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={App} />
      <Route exact path="/resume">
        <Redirect to="/resume.pdf"></Redirect>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
