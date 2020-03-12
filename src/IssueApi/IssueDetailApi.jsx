import React, { Component } from "react";
import { Link } from "react-router-dom";
import { get } from "./api";
import { withRouter } from "react-router-dom";
import { Badge } from "react-bootstrap";

class IssueDetailApi extends Component {
  constructor(props) {
    super(props);
    this.state = { issue: [] };
  }

  cargarIssue() {
    const id = this.props.match.params.issueId;
    console.log("id: ", id);
    get(id).then(issueFiltrado=>{
        console.log("result get: ", issueFiltrado);
        //const issue = get(id);
        //console.log("issue details: ", issue)
        this.setState({ issue: issueFiltrado });
    });
    
  }
  componentDidMount() {
    this.cargarIssue();
  }
  render() {
    //const { issue } = this.state;
    return (
      <div>
        <Link to="/">Volver</Link>
        <h4>
         {this.state.issue.titulo}
        </h4>
    <h2>{this.state.issue.contenido}</h2>
      </div>
    );
  }
}
export default withRouter(IssueDetailApi);
