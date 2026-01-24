import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useScrollAnimation } from "../../hooks/useScrollAnimations";

function Home() {
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useScrollAnimation(headerRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    duration: 1,
    start: "top 80%"
  });

  useScrollAnimation(imgRef, {
    from: { opacity: 0, x: 50, scale: 0.9 },
    to: { opacity: 1, x: 0, scale: 1 },
    duration: 1,
    delay: 0.2,
    start: "top 80%"
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" ref={headerRef}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VAIBHAV BAJAJ</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="sm:hidden" ref={imgRef}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
