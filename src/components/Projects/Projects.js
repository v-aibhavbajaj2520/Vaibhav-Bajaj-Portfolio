import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hizeIeee from "../../Assets/Projects/hize-ieee-mockup.png";
import amazonMockup from "../../Assets/Projects/amazon.png"
import netflixMockup from "../../Assets/Projects/netflix-mockup.png"
import gdgMockup from "../../Assets/Projects/GDG IILM mockup.png"

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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theYukt}
              isBlog={false}
              title="theYukt"
              description="A platform that connects IT students for hackathons, enabling effortless team formation through skill-based profiles and intuitive tools. Built with HTML, CSS, and JavaScript, it features a responsive design for seamless user experiences."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hizeIeee}
              isBlog={false}
              title="IEEE-HIZE"
              description="Developed a dynamic and responsive website for Hize X IEEE, showcasing event details, schedules, and registration features. Ensured a user-friendly interface with seamless navigation and optimized performance across devices."
              demoLink="https://ieeecssyphiz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonMockup}
              isBlog={false}
              title="Amazon Clone"
              description="A responsive front-end clone of the Amazon website built with HTML and CSS. Features include a modern navigation bar, product grid layout, and a design optimized for mobile, tablet, and desktop screens."
              ghLink="https://github.com/v-aibhavbajaj2520/Web-Dev/tree/main/CSS-%20Cascade%20Style%20Sheets/Projects/Amazon"
              demoLink="https://web-dev-two-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixMockup}
              isBlog={false}
              title="Netflix Clone"
              description="A responsive replica of Netflix’s landing page featuring a hero section, movie carousel, and call-to-action buttons. Built with HTML, CSS, and JavaScript for a smooth, mobile-friendly user experience."
              ghLink="https://github.com/v-aibhavbajaj2520/Web-Dev/tree/main/CSS-%20Cascade%20Style%20Sheets/Projects/Netflix"
              demoLink="https://netflix-sepia-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdgMockup}
              isBlog={false}
              title="GDG x IILM"
              description="GDG x IILM Website."
              ghLink="https://github.com/GDG-IILM/web_gdg_iilm"
              demoLink="https://gdgiilm.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
