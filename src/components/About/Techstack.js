import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiCodio} from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiJava,
  DiPython,
  DiGit,
  DiGithubBadge
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/><DiGithubBadge />
      </Col>
    </Row>
  );
}

export default Techstack;
