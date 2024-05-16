import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import energy_forecast from "../../Assets/Projects/energy_forecast.png";
import info_sec from "../../Assets/Projects/info_sec.png"
import temperature_controller from "../../Assets/Projects/temperature_controller.png"
import spider_logo from "../../Assets/Projects/spider_logo.jfif"
import nitt from "../../Assets/NITT_logo.png"
import chat_app from "../../Assets/Projects/chat_app.png"
import rock_paper_scissors from "../../Assets/rock_paper_scissors.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={energy_forecast}
              isLink={true}
              linkName={"Project Poster"}
              width="100%"
              height="100%"
              title="Energy Forecasting using LSTM-Transformers"
              description="I designed a hybrid LSTM-Transformer model to forecast household energy consumption, employing Keras, Keras-tuner, and TensorFlow. Through meticulous pre-processing techniques such as Date-Time feature engineering, periodical feature diversification, and embedded time lag, the model achieved a remarkable RMSE of 0.0979. This project showcased my proficiency in machine learning and deep learning methodologies, as well as my ability to optimize model performance through innovative pre-processing strategies."
              ghLink="https://github.com/sanjeevmax6/Electric-Energy-Forecasting-A-Hybrid-LSTM-Transformer-"
              demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={spider_logo}
              // isLink={true}
              // linkName={"Project Poster"}
              width="100%"
              height="80%"
              title="Lynx NITT - The Official NITT App"
              description="I oversaw a collaborative effort leading a team of five junior developers in the creation of a React Native mobile application aimed at facilitating seamless communication between university administration and students. The app incorporated multi-factor authentication to ensure secure .edu verification and included an intuitive event calendar feature powered by Redux, AWS, Firebase, and Node.js technologies. This experience honed my leadership skills while contributing to the enhancement of student-administration interaction within the university ecosystem."
              ghLink="https://github.com/SpiderNitt/NITT-APP"
              // demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={nitt}
              // isLink={true}
              // linkName={"Project Poster"}
              title="Orientation App'20"
              description="Our novel mobile application, tailored for incoming students at NIT Trichy amidst the pandemic, redefines the orientation experience for freshers joining the university virtually. Engineered to seamlessly operate on both Android and iOS platforms, our app harnesses the power of React Native, JavaScript, and MongoDB to deliver real-time orientation sessions, an interactive video player, communication facilities and curriculum insights with an unmatched user experience."
              ghLink="https://github.com/SpiderNitt/Orientation-App-Frontend"
              // demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>  

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={chat_app}
              // isLink={true}
              // linkName={"Project Poster"}
              title="Public Chatting Forum"
              description="I led the development of a Public Chatting Forum utilizing Google's Flutter framework, integrating Firebase for backend support and Dart for programming. Upon registration, users are seamlessly accessible on the forum, identified by their name, email, or phone. The cross-platform app, compatible with both iOS and Android, fosters effortless communication with multimedia capabilities for images and videos. Noteworthy features include message tagging, intuitive message timestamp viewing through a left-swipe gesture reminiscent of Instagram, all contributing to an optimized user."
              ghLink="https://github.com/sanjeevmax6/chat_app"
              // demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>   

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={rock_paper_scissors}
              // isLink={true}
              // linkName={"Project Poster"}
              title="Rock Paper Scissors"
              description="I developed a rock-paper-scissors game featuring two modes: individual play against a bot and multiplayer. In the multiplayer mode, fairness is ensured by implementing a synchronization mechanism where the game progresses only when both players input their moves simultaneously within a predefined threshold. Additionally, in the bot mode, the bot's move is determined completely randomly without any user input, eliminating bias. The UI of the game is designed to be highly interactive and efficient, providing users with an engaging gaming experience."
              ghLink="https://github.com/sanjeevmax6/Sanjeev_Android_Native"
              // demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>    

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={info_sec}
              isLink={true}
              linkName={"Project Report"}
              title="Image Authentication Based On Watermarking Approach"
              description="In this project, I explored the pivotal role of digital watermarking in image authentication, emphasizing its significance in safeguarding digital assets against theft and unauthorized usage. My proposed watermarking algorithm focused on embedding information seamlessly into image signals, thereby ensuring both authenticity and integrity. I have incorporated performance metrics like distortion, fuzzy region analysis, and the delicate balance between robustness and sensitivity to assess the effectiveness of the technique. Ultimately, the findings suggest that watermarking presents a promising solution for image authentication."
              demoLink="https://drive.google.com/file/d/1m2yDGkbhfGvPxKpJsjDZ17kgv5yQqs8f/view?usp=sharing"
            />
          </Col>  

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={temperature_controller}
              isLink={true}
              linkName={"Project Report"}
              title="Automatic Room Temperature Controller"
              description="I spearheaded the development of an 'Automatic Room Temperature Controller' aimed at dynamically adjusting temperature without requiring human intervention, ideal for scenarios such as transporting sensitive medical equipment like organs across long distances while maintaining specific temperature conditions. The system consists of an Arduino-based controller connected to a temperature sensor and a DC motor-operated fan. The temperature sensor continuously monitors the surrounding temperature, and based on predefined thresholds, the fan speed adjusts automatically to provide cooling or heating effects as needed. Various components, such as the Arduino UNO, LCD display, temperature sensor (TMP36), and a DC motor, ensure adaptability and applicability. The results demonstrate effective temperature control, with the fan speed varying proportionally to temperature changes within predefined ranges."
              demoLink="https://drive.google.com/file/d/1pJ7PoMFQk0mAatFFfAWWNO3_fmNOS2KF/view?usp=sharing"
            />
          </Col>          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
