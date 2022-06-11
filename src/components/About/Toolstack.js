import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiWindows,
  SiVisualstudiocode,
  SiPycharm,
  SiIntellijidea,
  SiGimp,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiWindows/> <SiLinux /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGimp />
      </Col>
    </Row>
  );
}

export default Toolstack;
