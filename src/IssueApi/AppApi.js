import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import IssueApi from "./IssueApi";
import "bootstrap/dist/css/bootstrap.min.css"


class AppApi extends React.Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/issues">
            <IssueApi />
          </Route>
          <Redirect path="/" to="/issues" />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default AppApi;
