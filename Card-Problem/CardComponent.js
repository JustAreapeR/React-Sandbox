// CardComponent.js
import React from "react";

const CardComponent = ({ title, content }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CardComponent;
