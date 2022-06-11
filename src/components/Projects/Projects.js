import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; // bg animation library
import PersonalWebsite from "../../Assets/Projects/pp.png";
import SecureStego from "../../Assets/Projects/logo.gif";
import GujaratTourism from "../../Assets/Projects/gt.png";
import Footer from "../Footer";

function Projects() {
  return (
    <div>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PersonalWebsite}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal portfolio website developed using ReactJs."
              link="https://shivamjj65.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SecureStego}
              isBlog={false}
              title="Secure Stego"
              description="Secure Image Steganographic software in which encryption is done using Blowfish Algorithm and Transmission of Image is done using Apache Kafka."
              link="https://ieeexplore.ieee.org/document/9716292"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GujaratTourism}
              isBlog={false}
              title="Tour Gujarat"
              description="My first ever Web Development project built only using HTML,CSS and Minimum Javascript."
              link="https://gujarattourism65.000webhostapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Footer/>
  </div>
  );
}

export default Projects;
