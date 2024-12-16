import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Bajaj </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am working on some personal projects.
            <br />
            I am currently pursing Bachelors of Technology Computer Science from IILM University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Scrolling Reels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Debugging: The art of removing bugs from code.
          Programming: The art of putting them in."{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
