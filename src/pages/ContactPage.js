import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../components/ScrollToTop";

const ContactPage = () => {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="jumbotron">
        <Container>
          <Row>
            <div>
              <Button
                variant="link"
                onClick={history.goBack}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </Button>
            </div>

            <div className="project-title">Contact Me</div>
            <p>If you'll like to stay in touch, drop me a message.</p>
            <p>If this form doesn't work, email me jitooi@outlook.com</p>
          </Row>
        </Container>
      </div>
      <Container style={{ marginBottom: "20px" }}>
        <Row>
          <Col sm={12}>
            <form action={process.env.REACT_APP_FORM_URL} method="post">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
