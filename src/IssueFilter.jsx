import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function IssueFilter({texto, handleChange}) {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        Filtro
      </Form.Label>
      <Col sm="8">
        <Form.Control
          name="filtro"
          type="text"
          value={texto}
          onChange={handleChange}
        />
      </Col>
      <Col sm="2">
        <Button variant="success">Nuevo</Button>
      </Col>
    </Form.Group>
  );
}
export default IssueFilter;
