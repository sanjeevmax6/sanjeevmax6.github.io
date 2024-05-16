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
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
