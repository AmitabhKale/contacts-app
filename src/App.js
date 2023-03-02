import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement("h1", null, "Contact Manager")
    );
  }
}

export default App;
