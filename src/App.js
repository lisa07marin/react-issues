import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Issue from "./Issue";
import "bootstrap/dist/css/bootstrap.min.css"


class App extends React.Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/issues">
            <Issue/>
          </Route>
          <Redirect path="/" to="/issues" />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
