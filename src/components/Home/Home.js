import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import sanjeev from "../../Assets/Sanjeev_pose.png";

const impactChips = [
  "4h to 10m workflow automation",
  "$11M cloud waste reduced",
  "Led 20 devs across 17 teams",
];

const featuredProjects = [
  {
    title: "Energy Forecasting using LSTM-Transformers",
    summary:
      "Hybrid LSTM-Transformer model for household energy forecasting with rigorous feature engineering.",
    metric: "RMSE 0.0979",
    link: "https://github.com/sanjeevmax6/Electric-Energy-Forecasting-A-Hybrid-LSTM-Transformer-",
  },
  {
    title: "Lynx NITT - Official University App",
    summary:
      "Led a team of 5 to ship a React Native app for campus communication and events.",
    metric: "MFA-secured .edu access",
    link: "https://github.com/SpiderNitt/NITT-APP",
  },
  {
    title: "Automatic Room Temperature Controller",
    summary:
      "Embedded system for dynamic temperature control using Arduino and sensor feedback.",
    metric: "Real-time fan speed control",
    link: "https://drive.google.com/file/d/1pJ7PoMFQk0mAatFFfAWWNO3_fmNOS2KF/view?usp=sharing",
  },
  {
    title: "Image Authentication via Watermarking",
    summary:
      "Watermarking algorithm for image integrity with distortion and robustness analysis.",
    metric: "Balanced robustness vs. sensitivity",
    link: "https://drive.google.com/file/d/1m2yDGkbhfGvPxKpJsjDZ17kgv5yQqs8f/view?usp=sharing",
  },
];

const experienceSnapshot = [
  {
    role: "Software Engineering Co-op, Web SDK",
    org: "Skillz",
    dates: "Aug 2024 - 6 months",
    impact: "Shipped Web SDK features for production games and stabilized critical flows.",
  },
  {
    role: "Graduate Research Assistant",
    org: "RIT - Gosnell School",
    dates: "Nov 2023 - 6 months",
    impact: "Built AI/ML pipelines for protein binding classification at scale.",
  },
  {
    role: "NLP Intern",
    org: "Stony Brook University",
    dates: "Jan 2022 - 6 months",
    impact: "Co-authored NLP-to-SQL research and improved model testing workflows.",
  },
  {
    role: "ML Intern",
    org: "NIT Trichy",
    dates: "Jul 2021 - 10 months",
    impact: "Forecasted cloud resource usage with novel optimization methods.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Dart"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Flask", "Flutter"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "XGBoost", "Transformers", "LSTM"],
  },
  {
    title: "Tools",
    items: ["AWS", "Firebase", "Jenkins", "Docker", "Git"],
  },
];

function Home() {
  return (
    <section className="portfolio-page" id="home">
      <Container className="hero-section">
        <Row className="align-items-center">
          <Col md={7}>
            <p className="hero-kicker">Software Engineer + AI Engineer</p>
            <h1 className="hero-title">Sanjeev Vijayakumar</h1>
            <p className="hero-subtitle">
              Built production systems at Skillz & Nokia. Automated real workflows from
              hours to minutes. Thrive in high-ownership, user-close environments.
            </p>
            <div className="impact-chips">
              {impactChips.map((chip) => (
                <span className="impact-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="hero-cta">
              <Button
                className="cta-primary"
                href="https://drive.google.com/file/d/1-ouVuAvdUnvml8L0l2CC8RUOXOu2GUzh/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </Button>
              <Button
                className="cta-secondary"
                href="mailto:sv8958@rit.edu"
              >
                Email
              </Button>
              <a
                className="cta-icon"
                href="https://www.linkedin.com/in/sanjeev06/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="cta-icon"
                href="https://github.com/sanjeevmax6"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
          <Col md={5} className="hero-image">
            <img
              src={sanjeev}
              alt="Sanjeev Vijayakumar"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      <Container className="section" id="work">
        <div className="section-header">
          <h2>Featured Work</h2>
          <p>Selected projects that show engineering depth and measurable outcomes.</p>
        </div>
        <Row>
          {featuredProjects.map((project) => (
            <Col md={6} key={project.title} className="mb-4">
              <div className="feature-card">
                <h3>{project.title}</h3>
                <p className="feature-summary">{project.summary}</p>
                <p className="feature-metric">{project.metric}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="section" id="experience">
        <div className="section-header">
          <h2>Experience Snapshot</h2>
          <p>High-signal roles focused on product delivery and AI systems.</p>
        </div>
        <div className="experience-list">
          {experienceSnapshot.map((item) => (
            <div className="experience-row" key={`${item.role}-${item.org}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-org">{item.org}</p>
              </div>
              <div className="experience-meta">
                <span>{item.dates}</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="section" id="skills">
        <div className="section-header">
          <h2>Skills</h2>
          <p>Grouped for quick scanning and future expansion.</p>
        </div>
        <Row>
          {skillGroups.map((group) => (
            <Col md={6} key={group.title} className="mb-4">
              <div className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="section" id="education">
        <Row>
          <Col md={6} className="mb-4">
            <div className="section-header">
              <h2>Education</h2>
            </div>
            <div className="education-card">
              <h3>Rochester Institute of Technology</h3>
              <p>MS in Artificial Intelligence - Aug 2023 - Dec 2025</p>
              <p>New York, USA</p>
            </div>
            <div className="education-card">
              <h3>NIT Tiruchirappalli</h3>
              <p>B.Tech Chemical Engineering + Computer Science - Jul 2019 - May 2023</p>
              <p>Tamil Nadu, India</p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="section-header">
              <h2>Leadership</h2>
            </div>
            <div className="education-card">
              <h3>Festember - Executive Committee Head</h3>
              <p>Led South Indias largest cultural festival across 17 teams.</p>
            </div>
            <div className="education-card">
              <h3>Spider R&amp;D - Senior App Developer</h3>
              <p>Mentored junior developers and shipped high-impact university apps.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="section" id="contact">
        <div className="contact-card">
          <h2>Lets connect</h2>
          <p>Open to Software Engineer and AI Engineer roles.</p>
          <div className="hero-cta">
            <Button className="cta-primary" href="mailto:sv8958@rit.edu">
              Email
            </Button>
            <Button
              className="cta-secondary"
              href="https://www.linkedin.com/in/sanjeev06/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
