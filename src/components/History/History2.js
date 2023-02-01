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
               <strong className="purple"> PENDIDIKAN </strong> 
            </h1>
            <p className="home-about-body">
              SD Santo Yosef Sidikalang  <br></br> SMP Negeri 1 Sidikalang
              <br />
              SMA Negeri 2 Sidikalang <br></br> Universitas Mikroskil 
              <br />
              
            </p>
            <h1 style={{ fontSize: "2.6em" }}>
               <strong className="purple"> <br/><br/>ORGANISASI </strong> 
            </h1>
            <p className="home-about-body">
              Anggota Pemuda Pancasila (PP)<br></br> Komunitas Pecinta Kucing Medan
              <br />
            
              
            </p>
            <h1 style={{ fontSize: "2.6em" }}>
               <strong className="purple"> <br/><br/>PEKERJAAN </strong> 
            </h1>
            <p className="home-about-body">
              Part-time barista Starbucks
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
