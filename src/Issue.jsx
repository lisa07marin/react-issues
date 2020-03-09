import React from "react";
import IssueFilter from "./IssueFilter";
import IssueList from "./IssueList";
import IssueNew from "./IssueNew";
import { listIssues } from "./sampleData";
import { withRouter, Route, Switch } from "react-router-dom";
class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFiltro: "",
      issuesFiltrados: []
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onNewIssue = this.onNewIssue.bind(this);
  }
  loadIssues() {
    const issues = listIssues(); //api
    this.setState({
      issues: issues,
      issuesFiltrados: issues
    });
  }

  componentDidMount() {
    this.loadIssues();
  }

  handleFilterChange(e) {
    //filtro q generalmente se hace en el backend
    const texto = e.target.value; //traigo el valor en una varianle
    const filtrados = this.state.issues.filter(
      //en un array guardo datos filtrados
      i => i.titulo.toUpperCase().indexOf(texto.toUpperCase()) !== -1 //filtro por el titulo en mayusculas y texto en mayusculas
    );
    this.setState({
      //actualizo el valor del texto
      textFiltro: texto,
      issuesFiltrados: filtrados
    });
  }
  //actualizar el listado de issue
  onNewIssue() {
    this.loadIssues();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/new`}>
            <IssueNew onNewIssue={this.onNewIssue} />
          </Route>
          <Route exact path={this.props.match.path}>
            <IssueFilter
              texto={this.state.textFiltro}
              handleChange={this.handleFilterChange}
            />
            <IssueList data={this.state.issuesFiltrados} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default withRouter(Issue);
