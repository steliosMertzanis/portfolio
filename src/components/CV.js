import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function CV() {
  //function for download cv when clicking the button
  const onButtonClick = () => {
    fetch("Mertzanis_cv.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mertzanis_cv.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="cv">
      <div className="check-cv">
        <button className="cv-button" onClick={onButtonClick}>
          Download my CV
        </button>
      </div>

      <div className="check-repo">
        <button className="repo-button">
          <Link
            className="repo-link"
            to={"https://github.com/steliosMertzanis"}
            target="_blank"
            aria-label="GitHub">
            Also you can check and my gitHub profil
            <FaGithub />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default CV;
