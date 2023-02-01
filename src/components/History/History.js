import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Contact2 from "./History2";
import Type from "./Type";

function History() {
  return (
    <section>
      <Container id="history">
        <Particle />
      </Container>
      <Contact2 />
    </section>
  );
}

export default History;
