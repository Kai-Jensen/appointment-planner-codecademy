import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.entries(description).map(([key, value], index) => (
        <p className="tile" key={index}>{value}</p>
      ))}
    </div>
  );
};
