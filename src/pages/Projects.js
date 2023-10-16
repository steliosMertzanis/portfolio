import React from "react";
import { ProjectList } from "../assets/ProjectList";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  return (
    <div className="projects">
      <h1> My personal Projects </h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              id={index}
              name={project.name}
              image={project.image.small}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
