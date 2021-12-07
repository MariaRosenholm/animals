import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./Animalcard";
import AnimalSingle from "./AnimalSingle";
import { Switch, Route } from "react-router-dom";

class AnimalList extends Component {
  state = {
    searchInput: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    let animalFilter = animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    let AnimalSearchList = animalFilter.map((animal) => (
      <AnimalsCard key={animal.name} name={animal.name} />
    ));
    return (
      <div>
        <label>Search</label>
        <input type="text" onChange={this.searchInputHandler} />
        <div className="wrapper">
          <Switch>
            <Route exact path={this.props.match.path}>
              {AnimalSearchList}
            </Route>
            <Route path={`${this.props.match.path}/:animal`}>
              <AnimalSingle />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default AnimalList;
