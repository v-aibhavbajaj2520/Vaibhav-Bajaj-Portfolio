import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows,
  FaInstagram 
 } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import {
  DiGithub,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
        <FaInstagram  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
