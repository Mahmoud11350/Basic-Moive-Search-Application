import React from "react";
import "./moive.css";

const Moive = ({ image, title }) => {
  return (
    <div className="wrapper">
      <div className="overlay">
        <h4>
          {title}
          <i className="bi bi-eye"></i>
        </h4>
      </div>
      <img
        className="rounded-3"
        style={{
          height: "400px",
          width: "300px",
        }}
        src={image}
        alt=""
      />
    </div>
  );
};

export default Moive;
