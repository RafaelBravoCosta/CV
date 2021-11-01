import React from "react";
import "./Technologies.css";

const Technologies = ({ technologies }) => {
  return (
    <div className="tech_card">
      <div className="teste">
      <h3>Technologies</h3>
        {technologies.map((item) => {
          return (
            <>
            <div key={JSON.stringify(item)}>
                <p>{item}</p>
              </div>
                </>
          );
        })}
      </div>
    </div>

  );
};

export default Technologies;