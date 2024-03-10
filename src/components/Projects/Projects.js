import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import contact from "../../Assets/Projects/contact.jpg";
import library from "../../Assets/Projects/library.jpg";
import school from "../../Assets/Projects/school.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contact}
              isBlog={false}
              title=<i>Contact Management System</i>
              description="The Contact Management System streamlines communication by organizing and storing contact information efficiently. With user-friendly interfaces, it enables easy access to essential details, facilitating seamless interactions."
              ghLink="https://github.com/AS-DarkCode/Contect-Management-"
              // demoLink=""
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="Explore our Library Management System: a PHP MVC project enabling users to read books, and admins to manage users and books seamlessly. Add, delete, and organize resources efficiently for an enhanced library experience."
              ghLink="https://github.com/AS-DarkCode/Library/tree/main/MVC"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School Management System"
              description="Under Proccessing"
              ghLink=""
           // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
