import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Animalcard = (props) => {
  const match = useRouteMatch();

  return (
    <div className="card">
      <h2>
        {props.name.substring(0, 1).toUpperCase() +
          props.name.substring(1, props.name.length)}
      </h2>
      <img
        alt="animal"
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
      />
      <Link className="links linkListItem" to={`${match.url}/${props.name}`}>
        Read more
      </Link>
    </div>
  );
};

export default Animalcard;
