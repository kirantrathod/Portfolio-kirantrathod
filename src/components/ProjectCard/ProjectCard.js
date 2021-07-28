import React from "react";
import "./ProjectCard.css";
function ProjectCard(props) {
  return (
    <div className="card-container">
      <h4 className="card-header">{props.header}</h4>
      <p className="card-description">{props.description}</p>
      <p className="tech-stack">Tech-Stack: {props.techStack}</p>
      <span>
        <a href={props.viewProjectLink}>
          <button className="btn">View Project</button>
        </a>
        <a href={props.liveProjectLink} hidden={!props.liveProjectLinkEnabled}>
          <button className="btn">Live Project</button>
        </a>
      </span>
    </div>
  );
}
export default ProjectCard;
