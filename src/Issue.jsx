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

  handleFilterChange(e) { //filtro q generalmente se hace en el backend
    const texto = e.target.value; //traigo el valor en una varianle
    const filtrados = this.state.issues.filter( //en un array guardo datos filtrados
      i => i.titulo.toUpperCase().indexOf(texto.toUpperCase()) !== -1 //filtro por el titulo en mayusculas y texto en mayusculas
    );
    this.setState({ //actualizo el valor del texto
      textFiltro: texto,
      issuesFiltrados: filtrados
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
