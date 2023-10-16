import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProjectList } from "../assets/ProjectList";
import { TbView360 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const projectUrl = project.url;
  const projectRepo = project.repositoryUrl;

  const [imageUrl, setImageUrl] = useState(project.image.small);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setImageUrl(project.image.large);
      } else if (window.innerWidth >= 769) {
        setImageUrl(project.image.medium);
      } else {
        setImageUrl(project.image.small);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const redirectToUrl = (url) => {
    window.location.href = url;
  };
  return (
    <div className="project">
      <div className="name"> {project.name} </div>
      <div className="descr">{`Skills: ${project.description}`}</div>
      <img className="image" src={imageUrl} alt="" />
      <div className="buttons">
        <button className="btn" onClick={() => redirectToUrl(projectUrl)}>
          <TbView360 className="icons" />
        </button>
        <button className="btn" onClick={() => redirectToUrl(projectRepo)}>
          <FaGithub className="icons" />
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
