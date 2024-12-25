import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hizeIeee from "../../Assets/Projects/hize-ieee-mockup.png";
import amazonMockup from "../../Assets/Projects/amazon.png"
import netflixMockup from "../../Assets/Projects/amazon.png"

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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
