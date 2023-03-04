import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";
import AddContact from "./pages/AddContact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import EditContact from "./pages/EditContact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider>
          <Header branding="Contacts App" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
