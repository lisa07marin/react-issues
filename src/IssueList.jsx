import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function IssueList(props) {
  return (
    <div>
      <ListGroup>
        {props.data.map(i => {
          return (
            <ListGroup.Item key={i.id}>
              <h6>
                <Link to={`${props.match.url}/${i.id}`}>{i.titulo}</Link>
              </h6>
              <div>
                <span>#{i.id} </span>
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
export default withRouter(IssueList);
