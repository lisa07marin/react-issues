import React, { Component } from "react";
import { get, close, reopen } from "./sampleData";
import { withRouter, Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { Button } from "react-bootstrap";

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

  loadIssue() {
    const id = Number(this.props.match.params.issueId);
    const issue = get(id);
    this.setState({ issue });
  }

  onCerrar() {
    const { issue } = this.state;
    close(issue.id);
    this.loadIssue();
  }

  onReabrir() {
    reopen(this.state.issue.id);
    this.loadIssue();
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
        <span> {moment.unix(issue.fecha).format("LLLL")}</span>

        <Card border="dark">
          <ReactMarkdown source={issue.contenido} />
        </Card>

        {issue.estado === "closed" && (
          <div>
            <Button size="sm" onClick={this.onReabrir.bind(this)}>
              Reabrir
            </Button>
            <span title={moment.unix(issue.modificado).format("LLLL")}>
              Cerrado {moment.unix(issue.modificado).fromNow()}
            </span>
          </div>
        )}
        {issue.estado === "open" && (
          <div>
            <Button size="sm" onClick={this.onCerrar.bind(this)}>
              Cerrar
            </Button>
            {issue.modificado && (
              <span title={moment.unix(issue.modificado).format("LLLL")}>
                Reabierto {moment.unix(issue.modificado).fromNow()}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(IssueDetail);
