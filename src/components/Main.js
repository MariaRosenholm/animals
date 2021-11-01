import React from "react";
import AnimalList from "./Animals/AnimalList";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/animals" component={AnimalList} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Main;
