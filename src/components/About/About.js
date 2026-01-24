import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useScrollAnimation } from "../../hooks/useScrollAnimations";

function About() {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const skillTitleRef = useRef(null);
  const toolTitleRef = useRef(null);

  useScrollAnimation(cardRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    start: "top 80%"
  });

  useScrollAnimation(imgRef, {
    from: { opacity: 0, x: 50, scale: 0.9 },
    to: { opacity: 1, x: 0, scale: 1 },
    duration: 0.8,
    delay: 0.2,
    start: "top 80%"
  });

  useScrollAnimation(skillTitleRef, {
    start: "top 85%"
  });

  useScrollAnimation(toolTitleRef, {
    start: "top 85%"
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            ref={cardRef}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            ref={imgRef}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" ref={skillTitleRef}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" ref={toolTitleRef}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
