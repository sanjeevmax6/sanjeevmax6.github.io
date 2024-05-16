import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Apply custom styling to the Card.Img component */}
      {/* <div style={{ width: "100%", position: "relative" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", paddingTop: "56.25%" }}
        />
      </div> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>
          <strong className="purple">{props.period} </strong>{" "}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <Card.Text>
          <strong className="purple">Experience Gained </strong>{" "}  
          </Card.Text>
          {props.description}
        </Card.Text>
        {props.achievements && (<Card.Text style={{ textAlign: "justify" }}>
          <Card.Text>
          <strong className="purple">Achievements </strong>{" "}  
          </Card.Text>
          {props.achievements}
        </Card.Text>)}
        {props.skills && (<Card.Text style={{ textAlign: "center" }}>
        <strong className="purple">Skills: </strong>{" "} {props.skills}
        </Card.Text>)}

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

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
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
