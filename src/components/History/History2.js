import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myAbt from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";
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
              
              &bull;&nbsp;&nbsp;SD Santo Yosef Sidikalang<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <em>Siswa&nbsp;&bull;&nbsp;2013</em><br></br><br></br> 
              &bull;&nbsp;&nbsp;SMP Negeri 1 Sidikalang<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <em>Siswa&nbsp;&bull;&nbsp;2016</em><br></br><br></br> 
              &bull;&nbsp;&nbsp;SMA Negeri 2 Sidikalang<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <em>Siswa / Matematika dan Ilmu Pengetahuan Alam (MIPA)&nbsp;&bull;&nbsp;2019</em><br></br><br></br>  
              &bull;&nbsp;&nbsp;Universitas Mikroskil<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <em>Mahasiswa / Teknik Informatika&nbsp;&bull;&nbsp;- sekarang</em><br></br>  
    
          
            </p>
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> PENDIDIKAN </span> 
            </h1>
            <p className="home-about-body">
              *SD SANTO YOSEF SIDIKALANG  <br></br> *SMP NEGERI 1 SIDIKALANG
              <br />
              *SMA NEGERI 2 SIDIKALANG <br></br> *UNIVERSITAS MIKROSKIL 
              <br />
              
            </p>
          </Col>
          <Col md={4} style={{ paddingTop: 100 }}>
            <Tilt>
              <img
                src={myAbt}
                alt="History"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </Tilt>
              </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default History2;
