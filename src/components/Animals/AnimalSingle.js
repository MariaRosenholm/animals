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
      <p>
        This is page for{" "}
        {animal.substring(0, 1).toUpperCase() +
          animal.substring(1, animal.lenght)}
        !
      </p>
    </div>
  );
};

export default AnimalSingle;
