import React from "react";
import { Tile } from "../../components/tile/Tile";


export const TileList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        const { name, ...description } = item;
        return <Tile key={index} name={name} description={description} />;
      })}
    </div>
  );
};

