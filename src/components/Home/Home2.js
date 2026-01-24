import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImage.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useScrollAnimation, useScrollStagger } from "../../hooks/useScrollAnimations";

function Home2() {
  const descRef = useRef(null);
  const avatarRef = useRef(null);
  const socialRef = useRef(null);

  useScrollAnimation(descRef, {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    start: "top 75%"
  });

  useScrollAnimation(avatarRef, {
    from: { opacity: 0, scale: 0.8, rotate: -10 },
    to: { opacity: 1, scale: 1, rotate: 0 },
    duration: 0.8,
    delay: 0.2,
    start: "top 75%"
  });

  useScrollStagger(socialRef, ".social-icons", {
    from: { opacity: 0, y: 20, scale: 0.5 },
    to: { opacity: 1, y: 0, scale: 1 },
    start: "top 90%",
    stagger: 0.1
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" ref={descRef}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java, Javascript and C. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Cybersecurity.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" ref={avatarRef}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" ref={socialRef}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple animate-rotate-360">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/v-aibhavbajaj2520"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-rotate-360 transition"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/Vaibhav18206630?t=ZRk-fCpJ7H6g7qDHSCExyQ&s=09"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vaibhav-bajaj-2005vaibhav"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/vaibhav.bajaj._"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
