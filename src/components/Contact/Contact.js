import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Contact2 from "./Contact2";
import Type from "./Type";

function Contact() {
  return (
    <section>
      <Container fluid className="home-section" id="contact">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Halo Semuanya!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻 
                </span>
              </h1>

              <h1 className="heading-name">
                Saya Perwakilan dari <br></br>
                <strong className="main-name"> Kelompok Temporaryyyyyy</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Contact2 />
    </section>
  );
}

export default Contact;
