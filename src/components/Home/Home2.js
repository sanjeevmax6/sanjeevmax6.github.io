import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../Assets/about.png"
import sanjeev from "../../Assets/Sanjeev_pose.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "../About/Toolstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET TO <span className="purple"> KNOW </span> ME
            </h1>
            <p className="home-about-body">
            An adept graduate scholar specializing in Artificial Intelligence and Machine Learning from an engineering background. 
            With Proficiency in Python, TensorFlow, and PyTorch, I've contributed to impactful projects, including gene regulation research and environmental sustainability initiatives. 
            My international research experiences with University of Amsterdam and IRIT Labs, France, brings a global perspective to my work. 
            I am passionate about real-world applications, such as predictive modeling and self-adaptive systems. 
            As a leader by nature, I've spearheaded Festember, South India's Largest Cultural Festival and guided junior application developers at Spider R&D, 
            I am committed to excellence in every endeavor.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={about} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Container>
        <h1 className="project-heading">
          Programming <strong className="purple">Languages </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Frameworks</strong>
        </h1>
        <Toolstack />
      </Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sanjeevmax6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanjeev06/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
