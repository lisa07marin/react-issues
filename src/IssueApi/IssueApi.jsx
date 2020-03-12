import React, { Component } from "react";
import IssueListApi from "./IssueListApi";
import IssueNewApi from "./IssueNewApi";
import IssueDetailApi from "./IssueDetailApi";
import { Switch, Route, withRouter } from "react-router-dom";
import IssueFilterApi from "./IssueFilterApi";

class IssueApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFilter: "",
      issues: [],
      issuesFiltrados: []
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const url="http://beta-api.sitrack.io/edna/Issue";
    fetch(url, {
      headers: {
        "content-type": "application/json",
        Authorization: "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          issues: res,
          issuesFiltrados: res
        });
      });
  }

  handleFilterChange(e) {
    const texto = e.target.value;
    const filtrados = this.state.issues.filter(
      i => i.titulo.toUpperCase().indexOf(texto.toUpperCase()) !== -1
    );
    this.setState({
      textFilter: texto,
      issuesFiltrados: filtrados
    });
  }

  render() {
    return (
      <div>
        <h3>Issues</h3>
        <Switch>
        <Route path={`${this.props.match.path}/new`}>
            <IssueNewApi />
          </Route>
          <Route path={`${this.props.match.path}/:issueId`}>
            <IssueDetailApi />
          </Route>
          <Route exact path={this.props.match.path}>
            <IssueFilterApi
              texto={this.state.textFilter}
              handleChange={this.handleFilterChange}
            />
            <IssueListApi issues={this.state.issuesFiltrados} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default withRouter(IssueApi);
