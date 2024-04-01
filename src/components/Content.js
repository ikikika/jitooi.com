import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { SelectionContext } from "../context/SelectionContext";
import { MobileBar } from "../components/Sidebar";

const projects = [
  {
    id: 1,
    image: "images/deliver-mgmt/interfaces-thumb.png",
    title: "Delivery Management System",
    text: "Customer create orders, admin schedule drivers and manage orders, award referral commissions.",
    link: "delivery-management",
    type: "PROJECTS",
    skills: ["swift", "reactjs", "php-laravel", "mysql"],
    show: true,
  },
  {
    id: 2,
    image: "images/appt-mgmt-pos/pos-intro-thumb.png",
    title: "Appointment Management + POS System",
    text: "Schedule appointments, manage customer credits and generate invoices for appointments and products sold.",
    link: "appointment-inventory-management-pos",
    type: "PROJECTS",
    skills: ["php-laravel", "mysql"],
    show: true,
  },
  {
    id: 3,
    image: "images/country-club/intro-thumb.png",
    title: "CMS for Country Club Website",
    text: "Online editor for content, image uploader for slideshow and pages, class schedules, event calendar and virtual tours for facilities",
    link: "cms-country-club-website",
    type: "PROJECTS",
    skills: ["php-codeigniter", "mysql"],
    show: true,
  },
  {
    id: 4,
    image: "images/pos-invt-mgmt/intro-thumb.png",
    title: "Multistore POS + Inventory Management for Retail Shops",
    text: "Multistore, track sales, inventory records, allow discounts on checkout, receipt generation.",
    link: "multistore-pos-inventory-management",
    type: "PROJECTS",
    skills: ["php-laravel", "mysql"],
    show: true,
  },
  {
    id: 5,
    image: "images/ecomcourse/intro.png",
    title: "E-commerce + Course Management system",
    text: "Ecommerce system for selling offline courses",
    link: "e-commerce-course-management",
    type: "PROJECTS",
    skills: ["php-codeigniter", "mysql"],
    show: true,
  },
  {
    id: 6,
    image: "images/cosmetic-products-website/intro.png",
    title: "Cosmetic Products Website",
    text: "Website with products listing",
    link: "cosmetic-products-website",
    type: "PROJECTS",
    skills: ["php-laravel", "mysql"],
    show: true,
  }
];

const projectToolTip =
  "These are the projects my generous ex-clients have graciously allowed me to share some screenshots.";
const learningToolTip =
  "These are the projects I made as I was learning new technologies.";

const Content = () => {
  const { selectedSkills } = useContext(SelectionContext);
  const [showProject, setShowProject] = useState(projects);

  useEffect(() => {
    if (selectedSkills.length === 0) {
      const newProjectList = projects.map((p) => {
        p.show = true;
        return p;
      });
      setShowProject(newProjectList);
    } else {
      const newProjectList = projects.map((p) => {
        p.show = false;
        selectedSkills.forEach((s) => {
          if (p.skills.includes(s)) {
            p.show = true;
          }
        });
        return p;
      });
      setShowProject(newProjectList);
    }
  }, [selectedSkills]);

  const ShowProjectComponent = ({ category }) => {
    const history = useHistory();
    const showProjects = showProject.filter(
      (p) => p.type === category && p.show
    );

    return (
      <>
        {showProjects.length ? (
          <Row>
            <Col>
              <div className="section-title">
                {category}{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip>
                      {category === "PROJECTS"
                        ? projectToolTip
                        : learningToolTip}
                    </Tooltip>
                  }
                >
                  <span>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}

        <Row>
          {showProjects.length
            ? showProjects.map((project) => (
                <Col
                  lg={4}
                  md={6}
                  xs={12}
                  key={project.id}
                  style={{ marginBottom: "10px" }}
                >
                  <Card style={{ height: "100%" }}>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>
                        {project.text}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        onClick={() => history.push(project.link)}
                      >
                        Find Out More
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            : ""}
        </Row>
      </>
    );
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div style={{ backgroundColor: "#F5F5F5" }}>
              <div id="banner">
                <Image
                  src="images/jit.png"
                  roundedCircle
                  fluid
                  id="mobile-profile-img"
                />
                <div id="banner-title">
                  Every line of{" "}
                  <span style={{ fontFamily: "Andale Mono" }}>
                    &lt;code /&gt;
                  </span>{" "}
                  is a living thing
                </div>

                <div style={{ width: "100%" }}>
                  <Col id="center-button-wrapper">
                    <a
                      href="mailto:contact@jitooi.com"
                      className="center-buttons center-button-full"
                    >
                      <Button variant="primary" className="center-button ">
                        jitooi@outlook.com
                      </Button>
                    </a>

                    <a
                      href="https://github.com/ikikika"
                      className="center-buttons"
                    >
                      <Button variant="primary" className="center-button">
                        My Github
                      </Button>
                    </a>

                    <Link to="/contact" className="center-buttons">
                      <Button variant="primary" className="center-button">
                        Contact Me
                      </Button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <MobileBar />
          </Col>
        </Row>
        <ShowProjectComponent category="PROJECTS" />
        <ShowProjectComponent category="LEARNING" />
      </Container>
    </>
  );
};

export default Content;
