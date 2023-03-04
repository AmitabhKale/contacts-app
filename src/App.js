import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";
import AddContact from "./components/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Header branding="Contacts App" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
