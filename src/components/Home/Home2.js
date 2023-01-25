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

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              IZINKAN SAYA <span className="purple"> MEMPERKENALKAN </span> DIRI
            </h1>
            <p className="home-about-body">
              Saya jatuh cinta dengan pemrograman dan setidaknya saya telah belajar sesuatu, <br></br> saya pikir ... 🤷‍♂️
              <br />
              <br />Saya mahasiswa semester 7 di Universitas Mikrosil dan mempelajari beberapa bahasa pemograman, yaitu 
              <i>
                <b className="purple"> C++, Javascript dan Python. </b>
              </i>
              <br />
              <br />
              Bidang Minat saya sedang membangun baru &nbsp;
              <i>
                <b className="purple">Teknologi dan Produk WEB </b> dan juga
                bidang yang terkait dengan{" "}
                <b className="purple">
                  Deep Learning dan Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Bila memungkinkan, saya juga menerapkan hasrat saya untuk mengembangkan produk dengan <b className="purple">Node.js</b> dan
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library dan Frameworks
                </b>
              </i>
              &nbsp; seperti
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="boy.jpg" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>IKUTI SAYA DI</h1>
            <p>
              Jangan ragu untuk <span className="purple">tehubung </span>dengan saya
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.twitter.com/Lync09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              { <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> }
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/royantsrg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
