import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sanjeev from "../../Assets/Sanjeev_pose.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> Sanjeev Vijayakumar</strong>
              </h1>

              <div style={{paddingLeft: 50, paddingRight: 50, paddingVertical: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, paddingLeft: 60 }}>
              <img
                src={sanjeev}
                alt="home pic"
                className="img-fluid rounded-circle"
                style={{ width: "60%", height: "100%" }}
              />
            </Col>
          </Row>

          {/* Education Section */}
          {/* <Row className="mt-5">
            <Col md={12}>
              <h2 className="education-heading">Education</h2>
              <Row className="mt-4">
                <Col md={6}>
                  <div className="education-card">
                    <h3>Master's Degree</h3>
                    <p className="degree-name">Master of Science in Computer Science</p>
                    <p className="college-name">Arizona State University</p>
                    <p className="graduation-date">Expected May 2024</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="education-card">
                    <h3>Bachelor's Degree</h3>
                    <p className="degree-name">Bachelor of Engineering in Computer Science</p>
                    <p className="college-name">Anna University</p>
                    <p className="graduation-date">May 2022</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;