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
import ReactTooltip from 'react-tooltip';

function Home2() {
  const tooltipStyles = {
    backgroundColor: 'transparent',
    color: 'purple',
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET TO <span className="purple"> KNOW </span> ME
            </h1>
            <p className="home-about-body">
            I'm an adept graduate scholar specializing in Software Engineering & AI. I come from an engineering background with
            competence in React, NextJS, SQL, Python, and TensorFlow. I've contributed to impactful projects, allowing to cut down $11M cloud resources wastage, and a lot others. 
            My software engineering experience with Skillz, and international research experiences in France and Amsterdam, brings global perspective to my work. 
            As a leader by nature, I've spearheaded South India's Largest Cultural Festival and mentored junior application developers for over 3 years.
            I am committed to excellence in my every endeavor.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={about} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="mt-5">
            <Col md={12}>
              <h2 className="education-heading">
              <strong className="purple">
                Education
              </strong>
                </h2>
              <Row className="mt-4">
                <Col md={6}>
                  <div className="education-card">
                    <h3>
                    <a href="https://www.rit.edu/" className="link-hover" target="_blank">
                      Rochester Institute of Technology
                    </a>
                    </h3>
                    <p className="degree-name">Master of Science in Artificial Intelligence</p>
                    <p className="college-name">New York, USA</p>
                    <p className="graduation-date">August 2023 - December 2025</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="education-card">
                    <h3>
                    <a href="https://www.nitt.edu/" className="link-hover" target="_blank">
                      National Institute of Technology, Tiruchirappalli
                    </a>
                      </h3>
                    <p className="degree-name">Bachelor of Technology; Chemical Engineering, Computer Science</p>
                    <p className="college-name">Tamilnadu, India</p>
                    <p className="graduation-date">July 2019 - May 2023</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        <Container>
        <ReactTooltip style={tooltipStyles}/>
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
