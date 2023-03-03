import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contacts App" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Jane Doe"
            email="jdoe@gmail.com"
            phone="555-444-3333"
          />
          ;
        </div>
      </div>
    );
  }
}

export default App;
