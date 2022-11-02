import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hai semuanya, Saya <span className="purple">Roy Antoni Siregar </span>
            dari <span className="purple"> Medan, Indonesia.</span>
            <br />Saya adalah mahasiswa Universitas Mikroskil.
            <br />
            <br />
            Selain coding, Saya juga menyukai hal-hal lain!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Menonton
            </li>
            <li className="about-activity">
              <ImPointRight /> Membaca Buku
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hidup ini, adalah taruhan!"{" "}
          </p>
          <footer className="blockquote-footer">Roy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
