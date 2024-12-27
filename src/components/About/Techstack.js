import React, {useState} from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiJava,
} from "react-icons/di";
import {SiHtml5, SiCss3, SiMysql, SiDart } from 'react-icons/si'
import {AiOutlineCode} from 'react-icons/ai'
import {FaDatabase} from 'react-icons/fa' 

const  Techstack = () => {
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
    // <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingLeft: 0 }}>
    <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Python")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
      <DiPython className="icon-color"/>
      </Col>  

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("JavaScript")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <DiJavascript1 className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("C++")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <CgCPlusPlus className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Java")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <DiJava className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("HTML")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiHtml5 className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("CSS")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiCss3 className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("MySQL")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiMysql className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Bash Scripting")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <AiOutlineCode className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Dart (Flutter)")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <SiDart className="icon-color"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("SQLite")} onMouseLeave={handleMouseLeave} data-tip={tooltipText}>
        <FaDatabase className="icon-color"/>
      </Col>
 
    </Row>
  );
}

export default Techstack;


