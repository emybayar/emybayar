import React from "react";
import "./ProjectPage.css";

const ProjectPage = ({ title, info, description, media }) => (
  <div className="project-wrapper">
    <div className="left-panel">
      <h1 className="project-title">{title}</h1>
      <p className="project-info">{info}</p>
      <div className="project-description">
        {description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
    <div className="right-panel">
      {media.map((item, idx) => {
        if (item.type === "embed") {
          return (
            <div
              key={idx}
              className="project-media"
              dangerouslySetInnerHTML={{ __html: item.embedCode }}
            />
          );
        }

        if (item.type === "video") {
          return (
            <video key={idx} controls width="100%">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        }

        return (
          <img key={idx} src={item.src} alt="" className="project-media" />
        );
      })}

      {/* {media.map((item, idx) =>
        item.type === "video" ? (
          <video key={idx} controls width="100%">
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img key={idx} src={item.src} alt="" className="project-media" />
        )
      )} */}
    </div>
  </div>
);

export default ProjectPage;
