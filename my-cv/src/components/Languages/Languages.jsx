import React from "react";
import "./Languages.css";

const Languages = ({ languages }) => {
  return (
    <div>
      <div className="language_card">
      <h3>Languages</h3>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.language}</p>
              <p>writing level: {item.wrlevel}</p>
              <p>speaking level: {item.splevel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;