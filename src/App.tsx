import React, { Component } from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";


import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
      </React.Fragment>
    );
  }
}

export default App;
