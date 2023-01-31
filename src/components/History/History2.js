import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function History2() {
  return (
    <Container fluid className="home-about-section" id="aboutt">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> PENDIDIKAN </span> 
            </h1>
            <p className="home-about-body">
              SD SANTO YOSEF SIDIKALANG  <br></br> SMP NEGERI 1 SIDIKALANG
              <br />
              SMA NEGERI 2 SIDIKALANG <br></br> UNIVERSITAS MIKROSKIL 
              <br />
              
            </p>
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> <br/><br/>ORGANISASI </span> 
            </h1>
            <p className="home-about-body">
              Anggota Pemuda Pancasia (PP)<br></br> Komunitas Pecinta Kucing Medan
              <br />
            
              
            </p>
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> <br/><br/>PEKERJAAN </span> 
            </h1>
            <p className="home-about-body">
              Part time barista Starbucks
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="boy.jpg" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default History2;
