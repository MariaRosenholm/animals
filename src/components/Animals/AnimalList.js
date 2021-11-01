import React from "react";
import { animals } from "./animals";
import AnimalsCard from "./Animalcard";
import AnimalSingle from "./AnimalSingle";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const AnimalList = () => {
  const match = useRouteMatch();

  const animalsListing = animals.map((animal) => (
    <AnimalsCard key={animal.name} name={animal.name} />
  ));

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={match.path}>
          {animalsListing}
        </Route>
        <Route path={`${match.path}/:animal`}>
          <AnimalSingle />
        </Route>
      </Switch>
    </div>
  );
};

export default AnimalList;
