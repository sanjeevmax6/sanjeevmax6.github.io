import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function ProjectCards(props) {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e) => {
    // Prevent toggle if clicking on buttons or links
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
        <h5>
          {props.date}
        </h5>
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
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <Card.Title style={{ textAlign: "left", margin: 0 }}>
              <strong className="purple">
                <h5>
                  {props.title}
                </h5>
              </strong>
            </Card.Title>
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

            {isExpanded && (
              <>
                <Card.Text style={{ textAlign: "left" }}>
                  {props.description}
                </Card.Text>
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
