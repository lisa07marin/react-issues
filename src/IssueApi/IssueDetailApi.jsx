import React, { Component } from "react";
import { get, updateEstado, update } from "./api";
import { withRouter, Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { Button } from "react-bootstrap";

class IssueDetailApi extends Component {
  constructor(props) {
    super(props);
    this.state = { issue: [] };
  }

  cargarIssue() {
    const id = this.props.match.params.issueId;
    console.log("id: ", id);
    get(id).then(issueFiltrado => {
      console.log("result get: ", issueFiltrado);
      //const issue = get(id);
      //console.log("issue details: ", issue)
      this.setState({ issue: issueFiltrado });
    });
  }
  onCambiarEstado() {
    const { issue } = this.state;
    updateEstado(issue);
    update(issue);
    this.cargarIssue();

    console.log("despues de update");
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
          {issue.titulo} <span>#id</span>
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
            <Button size="sm" onClick={this.onCambiarEstado.bind(this)}>
              Reabrir
            </Button>
            <span title={moment.unix(issue.modificado).format("LLLL")}>
              Cerrado {moment.unix(issue.modificado).fromNow()}
            </span>
          </div>
        )}
        {issue.estado === "opened" && (
          <div>
            <Button size="sm" onClick={this.onCambiarEstado.bind(this)}>
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
export default withRouter(IssueDetailApi);
