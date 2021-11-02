import React from "react";
import { useParams } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();

  return (
    <div id="single">
      <img
        alt="animal"
        src={`https://source.unsplash.com/1600x900/?${animal}`}
      />
      <p>This is page for</p>
      {animal.substring(0, 1).toUpperCase() +
        animal.substring(1, animal.lenght)}
      !
    </div>
  );
};

export default AnimalSingle;
