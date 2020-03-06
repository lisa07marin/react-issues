import React from "react";
import { Badge, ListGroup} from "react-bootstrap";

function IssueList({data}) {
  return (
    <div>
      <ListGroup>
        {data.map(i => (
          <ListGroup.Item>
            <h6>{i.titulo}</h6>
            <div>
              <span>#{i.id}</span>
              <span>
                {i.estado === "open" ? (
                  <Badge variant="success">abierto</Badge>
                ) : (
                  " cerrado"
                )}
              </span>
              <span> por {i.usuario}</span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default IssueList;
