import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DesktopSidebar } from "../components/Sidebar";
import Content from "../components/Content";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} id="sidebar-wrapper">
          <DesktopSidebar />
        </Col>
        <Col xs={12} md={9} lg={9} id="content-wrapper">
          <Content />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
