import React, { Component } from "react";
import { get } from "./sampleData";
import { withRouter, Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import moment from "moment";
import { Alert } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

class IssueDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { issue: [] };
  }
  cargarIssue() {
    const id = Number(this.props.match.params.issueId);
    console.log("id: ", id);
    const issue = get(id);
    this.setState({ issue });
  }

  componentDidMount() {
    this.cargarIssue();
  }

  render() {
    const { issue } = this.state;
    return (
      <div>
        <Link to="/">Volver</Link>
        <h4>
          {issue.titulo} <span>#{issue.id}</span>
        </h4>
        {issue.estado === "open" ? (
          <Badge variant="success">abierto</Badge>
        ) : (
          <Badge variant="danger">cerrado</Badge>
        )}
        <span> {issue.usuario}</span>
        <span>
          {" "}
          {moment.unix(issue.fecha).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
        <Alert variant="light">
          <ReactMarkdown source={issue.contenido} />
        </Alert>
      </div>
    );
  }
}
export default withRouter(IssueDetail);
