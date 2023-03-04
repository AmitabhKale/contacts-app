import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Header branding="Contacts App" />
        <div className="container">
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
