import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Resume/ExperienceCard";
import Particle from "../Particle";

import graduate_research_assistant from "../../Assets/experience/research_assistant.png"
import amsterdam_ml from "../../Assets/experience/amsterdam_ml.png"
import nlp_stony_brook from "../../Assets/experience/nlp_stony_brook.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Academic </strong> Experience
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graduate_research_assistant}
              isLink={true}
              // linkName={"Project Poster"}
              title="Graduate Research Assistant"
              period="Nov 2023 - Present"
              description="As a Graduate Research Assistant specializing in bioinformatics, I focus on applying Artificial Intelligence (AI) and Machine Learning (ML) techniques to gene regulation. A pivotal task involves classifying DNA binding proteins, traditionally costly to experiment with. Leveraging Python, PyTorch, and Omega, I engineer innovative solutions, employing cutting-edge architectures like Protein Language Models and Graph Convolutional Neural Networks (GCNNs). To manage vast data volumes, I implement strategies such as sub-batching and harness the computational power of GPU clusters."
              skills="Bioinformatics, AI, ML, Python, PyTorch, Omega, Protein Language Models, GCNNs, Data Management, Problem-Solving."
              achievements="Successfully applied AI and ML techniques to gene regulation, developed innovative solutions for DNA binding protein classification, utilized advanced architectures like Protein Language Models and GCNNs, and implemented efficient data management strategies."
              ghLink="https://github.com/sanjeevmax6/GCPNet"
              // demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={graduate_research_assistant}
              // isLink={true}
              // linkName={"Project Poster"}
              title="Senior Application Developer"
              period="Sep 2020 - May 2022"
              description="Led impactful projects as Senior Application Developer at Spider, R&D, overseeing a team of 20 developers focused on innovation and technical expertise provision to the university. Collaborated with Robotics & Electronics domains to address challenges from external organizations. Spearheaded the development of key projects, including the 2020 Orientation App and Lynx NITT app, critical for facilitating online orientations and centralizing college information and communications."
              skills="Proficient in Team Leadership, Dart, iOS Development, Mobile Application Development, and JavaScript, essential for leading impactful projects and developing innovative mobile applications."
              achievements="Successfully developed and deployed the 2020 Orientation App, garnering 1000+ downloads and a 4.9/5 rating, facilitating seamless online orientations for freshmen during the pandemic. Led the creation of the Lynx NITT app, serving as a centralized platform for college information and club communications, with secure login functionality."
              ghLink="https://github.com/SpiderNitt"
              // demoLink="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amsterdam_ml}
              isLink={true}
              linkName={"Research Thesis"}
              title="Machine Learning Researcher"
              period="Dec 2022 - May 2023"
              description="Led a pioneering initiative at the University of Amsterdam utilizing machine learning to predict oil yields in plastic hydrothermal liquefaction, addressing plastic waste and environmental sustainability. Curated a comprehensive dataset by employing advanced data preprocessing techniques and integrating crucial parameters like temperature and pressure."
              skills="Machine Learning, Data Preprocessing, XGBoost, Categorical Variables, Data Analysis, Interdisciplinary Research, Environmental Sustainability, Plastic Waste, Predictive Modeling"
              achievements="Achieved a Mean Average Error of 23.45% using XGBoost as the optimal model, with one-hot encoding optimizing categorical variables. Highlighted noteworthy findings on catalytic pyrolysis, emphasizing optimal temperatures like 425°C. Demonstrated expertise in Machine Learning and data analysis methodologies, showcasing dedication to interdisciplinary research."
              // ghLink="https://github.com/sanjeevmax6/GCPNet"
              demoLink="https://drive.google.com/file/d/1xGBehlpxWSxE5nC_JJSWaKDCWPOwNAaa/view?usp=sharing"
            />
          </Col>
         
        </Row>
      </Container>



      
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Internships </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={nlp_stony_brook}
              isLink={true}
              linkName={"Empirical Paper"}
              title="Natural Language Processing Intern"
              period="Jan 2022 - Mar 2023"
              description="Collaborated in an NLP research project at Stony Brook University aimed at translating human language text into SQL queries for efficient database retrieval. Conducted a comprehensive survey of key NLP frameworks to distill their methodologies. Actively participated in hands-on tasks such as debugging source code, resolving compatibility issues, and testing models to ensure accuracy."
              skills="Natural Language Processing (NLP), Machine Learning Methodologies, Literature Reviews, Technical Writing, Debugging Code, Collaborative Problem-Solving, SQL Queries, Database Retrieval."
              achievements="Co-authored a research paper synthesizing NLP models and making significant contributions to the discourse on NLP-driven database query generation. Contributed to the development of innovative solutions for efficient database retrieval using NLP techniques. Demonstrated expertise in NLP, machine learning methodologies, and collaborative research."
              // ghLink="https://github.com/sanjeevmax6/GCPNet"
              demoLink="https://arxiv.org/abs/2208.04415"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // isLink={true}
              linkName={"Empirical Paper"}
              title="Information Retrieval Intern"
              period="Jun 2022 - Aug 2022"
              description="During my two-month summer internship in France, I led initiatives to optimize Dense Retrieval Models within legal information retrieval, focusing on streamlining the extraction of crucial legal insights from extensive documents. Working closely with the 'Lawbot' division, I delved into extensive literature reviews and adeptly implemented tools like pyserini and zero-shot retrieval methods to enhance Dense retrieval models, especially in scenarios with restricted server access."
              skills="Creative Strategy, Information Retrieval, Project Management, Natural Language Processing (NLP), Teamwork."
              achievements="Successfully integrated enhancements into the Lawbot model, significantly amplifying retrieval efficiency and addressing pivotal needs within the legal sector. Embracing a new continent, I cultivated invaluable soft skills such as teamwork, time management, and creative thinking, contributing to both professional and personal growth."
              // ghLink="https://github.com/sanjeevmax6/GCPNet"
              // demoLink="https://arxiv.org/abs/2208.04415"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isLink={true}
              linkName={"Research Publication"}
              title="Machine Learning Intern"
              period="Jul 2021 - Aug 2022"
              description="Led a groundbreaking project, 'Cloud Resource Usage Forecasting using Neural Network and Artificial Lizard Search Optimization,' targeting resource wastage in cloud computing. Conducted thorough literature review, identifying the 'Artificial Lizard Search Optimization' (ALSO) algorithm as a solution. Integrated ALSO into a neural network via backpropagation, coding the model from scratch in Python for flexibility. Developed dynamic lizard allocation approach for optimal efficiency."
              skills="Predictive Analytics, Literature Reviews, Technical Writing, Evolutionary Algorithms, Product Innovation."
              achievements="Successfully implemented innovative solution, addressing significant resource wastage issue in cloud computing. Model's performance rigorously evaluated, culminating in comprehensive research paper."
              ghLink="https://github.com/sanjeevmax6/ALSO-Optimization"
              demoLink="https://ieeexplore.ieee.org/abstract/document/9929894"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isLink={true}
              linkName={"Research Publication"}
              title="Computer Vision Intern"
              period="Jul 2021 - Jan 2022"
              description="Initiated and led the groundbreaking project 'DF E-commerce,' aimed at revolutionizing E-commerce recommendation systems by seamlessly integrating both textual and image data modalities. Oversaw the implementation of stages for intermediate image set generation using a customized web-crawler and Dolphin's echolocation metaheuristic algorithm. Employed objective functions like SemantoSim, NGD, and Shannon's entropy to compute semantic similarity, ensuring the model's effectiveness."
              skills="Recommendation System, Evolutionary Algorithms, Computer Vision, Machine Learning"
              achievements="Successfully demonstrated the superiority of DF E-commerce through comprehensive experiments, achieving an impressive 97.3% accuracy with an FDR of 0.04, showcasing its potential to enhance product recommendations in the E-commerce sector."
              // ghLink="https://github.com/sanjeevmax6/ALSO-Optimization"
              demoLink="https://link.springer.com/chapter/10.1007/978-3-031-01942-5_21"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // isLink={true}
              linkName={"Research Publication"}
              title="System Architect Intern"
              period="Mar 2021 - Aug 2021"
              description="Contributed to the development of the RISC-V system architecture at Shakti Labs, IIT Madras, focusing on the RISCOF compliance test generator. Scripted for Bit Manipulation in RISCV-CTG and RISCV-ISAC, analyzing hardware compatibility for integer, floating-point, and bit operators. Generated bash test cases with RISCV-CTG and executed them using RISCV-ISAC. Produced coverage reports referencing SPIKE/SAIL as the DUT, expanding expertise in system architecture and compliance testing."
              skills="Proficient in Operating Systems, Leadership, Red Hat Linux, Software Architecture, and Bash scripting, essential for contributing effectively to system architecture development and compliance testing."
              achievements="Played a key role in ensuring successful compliance testing, crucial for RISC-V's operation across various devices like tablets, mobiles, laptops, and pagers."
              // ghLink="https://github.com/sanjeevmax6/ALSO-Optimization"
              // demoLink="https://link.springer.com/chapter/10.1007/978-3-031-01942-5_21"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // isLink={true}
              linkName={"Research Publication"}
              title="Full Stack Developer Intern"
              period="Dec 2020 - Feb 2021"
              description="Led the development of a versatile healthcare application at Sensor Drops Network, IIT Kharagpur, designed for deployment on portable Raspberry Pi devices. Utilized Python-Flask within a Docker container to enable seamless access to patient vitals, including ECG, Heart Rate, and SpO2, from anywhere. Engineered an automated backup script for data integrity on portable devices, triggered periodically or upon network connectivity restoration. Played a pivotal role in deploying the application on Raspberry Pi devices, implementing efficient scheduling using Crontab."
              skills="Proficient in Flask, Full-Stack Development, Raspberry Pi, Docker, and Bash scripting, essential for developing and deploying versatile healthcare applications on portable devices."
              achievements="Successfully developed and deployed a groundbreaking healthcare application, facilitating seamless access to patient vitals for both doctors and patients, enhancing healthcare delivery and accessibility."
              // ghLink="https://github.com/sanjeevmax6/ALSO-Optimization"
              // demoLink="https://link.springer.com/chapter/10.1007/978-3-031-01942-5_21"
            />
          </Col>
          
        </Row>
      </Container>


      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Volunteering </strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Executive Committee Head"
              period="Feb 2022 - May 2023"
              description="During my senior year, I led Festember, South India's largest cultural festival, overseeing 17 teams and managing finances exceeding 10 million INR. Navigating government regulations, I ensured seamless collaboration, providing students a platform to showcase talents and connect with industry luminaries, shaping their career trajectories."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="International Relations Coordinator"
              period="Sep 2020 - Sep 2021"
              description="As part of OIR NIT Trichy, I was involved in managing informative seminars, gathering database for internship opportunities in foreign universities for students of NIT Trichy, drafting Faculty exchange and student exchange proposals and ideating for a research internship portal. 
              Our main motive is maximum global exposure for NIT Trichy."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Quality Assurance Manager"
              period="Aug 2020 - Jan 2022"
              description="
              As a Quality Assurance Manager at Pragyan, I ensure ISO certifications with professionalism. Having advanced from Coordinator, I lead patronage procurement and meticulous documentation. We brainstorm methods for genuine participant feedback in NIT Trichy's annual fest."
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
