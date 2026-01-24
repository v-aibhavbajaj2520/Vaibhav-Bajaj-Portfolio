import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaWindows,
  FaInstagram
} from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import {
  DiGithub,
} from "react-icons/di";
import { useScrollStagger } from "../../hooks/useScrollAnimations";

function Toolstack() {
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
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaInstagram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
