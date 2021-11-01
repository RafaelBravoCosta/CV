import React from "react";
import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className="project_card">
        {projects.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.tecnologies}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;