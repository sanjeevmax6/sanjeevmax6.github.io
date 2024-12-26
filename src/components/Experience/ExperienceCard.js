import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs"; // For company icon
import { BsClock } from "react-icons/bs"; // For duration icon

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="timeline-item">
      <div className="timeline-date">
        <span className="date-text">
          <strong className="purple">
            <h5>{props.period}</h5>
          </strong>
        </span>
      </div>
      <div className="timeline-content">
        <Card 
          className="project-card-view" 
          onClick={handleCardClick}
          style={{ cursor: 'pointer' }}
        >
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Card.Title style={{ textAlign: "left", margin: 0 }}>
                      <strong className="purple">
                        <h4 style={{ marginBottom: '0.2rem' }}>
                        <span className="d-flex align-items-center gap-1">
                        <BsBuilding size={18} />
                        <a href={props.href} className="link-hover" target="_blank">
                        {props.company}
                        </a>
                        </span>
                        </h4>
                      </strong>
                    </Card.Title>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                      <strong>
                      <span className="d-flex align-items-center gap-1 text-white">
                        {props.title}
                      </span>
                      </strong>
                      <span className="d-flex align-items-center gap-1 mt-1 text-white" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                        <BsClock size={12} />
                        {props.duration}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {!isExpanded && (
                      <>
                        {props.ghLink && (
                          <Button variant="primary" href={props.ghLink} target="_blank">
                            <BsGithub /> &nbsp;
                            {"GitHub"}
                          </Button>
                        )}
                        {props.isLink && props.demoLink && (
                          <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                          >
                            <CgWebsite /> &nbsp;
                            {props.linkName}
                          </Button>
                        )}
                      </>
                    )}
                    <div>
                      {isExpanded ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isExpanded && (
              <>
                <Card.Text style={{ textAlign: "justify" }}>
                  <strong className="purple">Experience Gained </strong>
                  <div className="mt-2 mb-3">{props.description}</div>
                </Card.Text>

                {props.achievements && (
                  <Card.Text style={{ textAlign: "justify" }}>
                    <strong className="purple">Achievements </strong>
                    <div className="mt-2 mb-3">{props.achievements}</div>
                  </Card.Text>
                )}

                {props.skills && (
                  <Card.Text style={{ textAlign: "left" }}>
                    <strong className="purple">Skills: </strong>
                    {props.skills}
                  </Card.Text>
                )}

                <div className="mt-3">
                  {props.ghLink && (
                    <Button variant="primary" href={props.ghLink} target="_blank">
                      <BsGithub /> &nbsp;
                      {"GitHub"}
                    </Button>
                  )}
                  {props.isLink && props.demoLink && (
                    <Button
                      variant="primary"
                      href={props.demoLink}
                      target="_blank"
                      style={{ marginLeft: "10px" }}
                    >
                      <CgWebsite /> &nbsp;
                      {props.linkName}
                    </Button>
                  )}
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProjectCards;