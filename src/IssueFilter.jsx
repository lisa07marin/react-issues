import React, { Component } from "react";
import { Row, Col, Form, Badge, Button } from "react-bootstrap";

export default class IssueFilter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Filtro
        </Form.Label>
        <Col sm="8">
          <Form.Control
            name="filtro"
            type="text"
            value={this.props.texto}
            onChange={this.props.handleFilterChange}
          />
        </Col>
        <Col sm="2">
          <Button variant="success">Nuevo</Button>
        </Col>
      </Form.Group>
    );
  }
}
