import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Ilasariya (Patel) </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I pursued Bachelor of Engineering in Information Technology from RGIT,Mumbai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games, Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Image and Video Editing
            </li>
            
            <li className="about-activity">
              <ImPointRight /> And Support Narendra Modi  : )
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
