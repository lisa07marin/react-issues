import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

class IssueNewApi extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values,{ setSubmitting }) {
    const url = "http://beta-api.sitrack.io/edna/Issue";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ=="
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }
  render() {
    const initialValues = { titulo: "", contenido: "", usuario: "" };

    return (
      <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
        {({ isSubmitting }) => (
          <Form as={FormikForm}>
            <Form.Group as={Row}>
              <Form.Label column sm="2" lg="1">
                Titulo
              </Form.Label>
              <Col sm="10" lg="11">
                <Form.Control name="titulo" required as={Field} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2" lg="1">
                Contenido
              </Form.Label>
              <Col sm="10" lg="11">
                <Form.Control
                  name="contenido"
                  component="textarea"
                  rows="10"
                  as={Field}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2" lg="1">
                Usuario
              </Form.Label>
              <Col sm="10" lg="11">
                <Form.Control name="usuario" required as={Field} />
              </Col>
            </Form.Group>
            <Button type="submit" disabled={isSubmitting}>
              Guardar
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}
export default withRouter(IssueNewApi);
