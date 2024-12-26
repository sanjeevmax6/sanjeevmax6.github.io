import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiInfluxdb,
  SiFlask,
  SiDocker,
  SiReact   
} from "react-icons/si";
import {FaGoogle, FaMobileAlt, FaFlag, FaNodeJs, FaMicrosoft, FaPenSquare, FaEnvelope, FaFire } from 'react-icons/fa'
import { SiDatadog, SiApacheairflow, SiJira } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import ReactTooltip from 'react-tooltip';


const tooltipStyles = {
  // maxWidth: '50px',
  backgroundColor: 'transparent',
  color: 'purple',
  // border: 'none'
};

const tooltipContainerStyles = {
  '.tooltip-container .react-tooltip': tooltipStyles
};


const Toolstack = () => {

  const [tooltipText, setTooltipText] = useState('');

  const tooltipStyles = {
    minWidth: `${tooltipText.length * 100}px`,
    padding: 5,
    background: 'transparent',
    opacity: 1 ,
    // color: 'purple',
  };

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
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col>  

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("PyTorch")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiPytorch className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Git")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiGit className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("InfluxDB")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiInfluxdb className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Flask")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiFlask className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Google Colab")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaGoogle className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Docker")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiDocker className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("React/React Native")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiReact className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Flutter")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaFlag className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("NodeJS")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaNodeJs className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Microsoft Office Suite")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaMicrosoft className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Notion")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaPenSquare className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Postman")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaEnvelope className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Firebase")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaFire className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Datadog")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiDatadog className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Airflow")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiApacheairflow className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("JIRA")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiJira className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Next JS")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <TbBrandNextjs className="icon-color"/>
        <ReactTooltip style={tooltipStyles} className="custom-tooltip"/>
      </Col> 

    </Row>
  );
}

export default Toolstack;
