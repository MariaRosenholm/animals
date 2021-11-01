import React, { Component } from "react";
import { animals } from "./components/Animals/animals.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    animals: animals,
  };

  render() {
    return (
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    );
  }
}

export default App;
