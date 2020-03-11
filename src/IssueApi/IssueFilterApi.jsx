import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

function IssueFilter(props) {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        Filtro
      </Form.Label>
      <Col sm="8">
        <Form.Control
          name="filtro"
          type="text"
          value={props.texto}
          onChange={props.handleChange}
        />
      </Col>
      <Col sm="2">
        <Link to={`${props.match.url}/new`}>
          <Button variant="success">Nuevo</Button>
        </Link>
      </Col>
    </Form.Group>
  );
}
export default withRouter(IssueFilter);
