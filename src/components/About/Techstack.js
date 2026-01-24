import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
  DiCss3,
  DiPhp,
  DiMongodb,
  DiWordpress,
} from "react-icons/di";
import {
  SiC,
  SiMysql,
  SiFirebase,
  SiReact
} from "react-icons/si";
import { useScrollStagger } from "../../hooks/useScrollAnimations";


function Techstack() {
  const rowRef = useRef(null);

  useScrollStagger(rowRef, ".tech-icons", {
    from: { opacity: 0, scale: 0.5, y: 30 },
    to: { opacity: 1, scale: 1, y: 0 },
    stagger: 0.1,
    duration: 0.5
  });

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} ref={rowRef}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
    </Row>
  );
}

export default Techstack;
