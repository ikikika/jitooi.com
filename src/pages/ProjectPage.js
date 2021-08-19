import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";
import ScrollToTop from "../components/ScrollToTop";

const ProjectPage = () => {
  let history = useHistory();
  let projectString = useParams();
  const project = require(`../projects/${projectString.project}.json`);

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

            <div className="project-title">{project.title}</div>
            <p>
              <span className="tech-used-title">Technologies used:</span>{" "}
              {project.techUsed.map((tech, i) => (
                <span className="tech-used" key={i}>
                  {tech}
                </span>
              ))}
            </p>
            <p>{project.date}</p>
          </Row>
        </Container>
      </div>
      <Container>
        <Row style={{ marginBottom: "30px" }}>
          <Col sm={project.imageCol}>
            <ModalImage
              imageBackgroundColor="transparent"
              small={`images/${project.imageFolder}/${project.mainImage}-thumb.png`}
              large={`images/${project.imageFolder}/${project.mainImage}.png`}
              alt={project.title}
            />
          </Col>
          <Col sm={project.descriptionCol}>
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </Col>
        </Row>

        {project.data.map((row, i) => (
          <Row key={i}>
            <Col sm={12}>
              <h2>{row.title}</h2>
            </Col>
            {row.items.map((item, j) => (
              <Col sm={row.itemCol} key={j}>
                <ModalImage
                  imageBackgroundColor="transparent"
                  small={`images/${project.imageFolder}/${item.image}-thumb.${item.type}`}
                  large={`images/${project.imageFolder}/${item.image}.${item.type}`}
                  alt={item.description}
                />
                <p>{item.description}</p>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <ScrollToTop />
    </>
  );
};

export default ProjectPage;
