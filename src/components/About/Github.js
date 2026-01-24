import React, { useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useScrollAnimation } from "../../hooks/useScrollAnimations";

function Github() {
  const rowRef = useRef(null);

  useScrollAnimation(rowRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    start: "top 85%"
  });

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} ref={rowRef}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="v-aibhavbajaj2520"
        blockSize={15}
        blockMargin={5}
        color="#0a578b94"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
