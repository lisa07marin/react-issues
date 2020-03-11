import React from "react";
import { ListGroup } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function IssueListApi(props) {
  return (
    <div>
      <ListGroup>
        {props.issues.map(i => {
          return (
            <ListGroup.Item key={i.id}>
              <h6>
                <Link to={`${props.match.url}/${i.id}`}>{i.titulo}</Link>
              </h6>
              <div>
                <span>
                  {i.estado === "open" ? (
                    <Badge variant="success">abierto</Badge>
                  ) : (
                    <Badge variant="danger">cerrado</Badge>
                  )}
                </span>
                <span> por {i.usuario}</span>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
export default withRouter(IssueListApi);
