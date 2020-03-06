import React from "react";
import IssueFilter from "./IssueFilter";
import IssueList from "./IssueList";
import { sampleData } from "./sampleData";
class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: sampleData,
      issuesFiltrados: sampleData,
      textFiltro: ""
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    this.state({
      textFiltro: e.target.value
    });
  }
  render() {
    return (
      <div>
        <IssueFilter
          texto={this.state.textFiltro}
          handleChange={this.handleFilterChange}
        />
        <IssueList data={this.state.issuesFiltrados} />
      </div>
    );
  }
}
export default Issue;
