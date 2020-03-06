import React, { Component } from "react";
import { Row, Col, Form, Badge, Button } from "react-bootstrap";

export default class IssueFilter extends Component {
  render() {
    return (
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Filtro
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" />
        </Col>
        <Col sm="2">
          <Button variant="success">Nuevo</Button>
        </Col>
      </Form.Group>
    );
  }
}
