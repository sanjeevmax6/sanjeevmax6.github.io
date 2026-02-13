import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiInfluxdb,
  SiFlask,
  SiDocker,
  SiReact   
} from "react-icons/si";
import {FaGoogle, FaFlag, FaNodeJs, FaMicrosoft, FaPenSquare, FaEnvelope, FaFire } from 'react-icons/fa'
import { SiDatadog, SiApacheairflow, SiJira } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const Toolstack = () => {

  const [tooltipText, setTooltipText] = useState('');

  // Function to handle mouse enter event and update tooltip text
  const handleMouseEnter = (text) => {
    if (tooltipText == '') {
      setTooltipText(text);
    }
  };
  
  // Function to handle mouse leave event and clear tooltip text
  const handleMouseLeave = () => {
    setTooltipText('');
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Tensorflow")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiTensorflow className="icon-color"/>
      </Col>  

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("PyTorch")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiPytorch className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Git")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiGit className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("InfluxDB")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiInfluxdb className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Flask")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiFlask className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Google Colab")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaGoogle className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Docker")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiDocker className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("React JS")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiReact className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Flutter")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaFlag className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("NodeJS")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaNodeJs className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Microsoft Office Suite")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaMicrosoft className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Notion")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaPenSquare className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Postman")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaEnvelope className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Firebase")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaFire className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Datadog")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiDatadog className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Airflow")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiApacheairflow className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("JIRA")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiJira className="icon-color"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Next JS")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <TbBrandNextjs className="icon-color"/>
      </Col> 

    </Row>
  );
}

export default Toolstack;
