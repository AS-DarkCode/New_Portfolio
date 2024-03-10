import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Sharma </span>
            from <span className="purple"> Bareilly UP, India.</span>
            <br />
            Specializing in PHP development, I engage in creating dynamic and efficient web solutions.            <br />
            I am currently in the final year of <span className="black">BCA at MJPRU University, Bareilly.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} className="black">
          "Decoding the Future, Line by Line."{" "}
          </p>
          <footer className="blockquote-footer">Akash Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
