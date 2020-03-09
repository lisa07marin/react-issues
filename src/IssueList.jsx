import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

function IssueList(props) {
  return (
    <div>
      <ListGroup>
        {props.data.map(i => {
          return (
            <ListGroup.Item key={i.id}>
              <h6>{i.titulo}</h6>
              <div>
                <span>#{i.id} </span>
                <span>
                  {i.estado === "open" ? (
                    <Badge variant="success">abierto</Badge>
                  ) : (
                    <Badge variant="success">cerrado</Badge>
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
export default IssueList;
