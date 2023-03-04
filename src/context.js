import React, { Component, createContext } from "react";

const Context = createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "jane doe",
        email: "jane@example.com",
        phone: "333-333-5555",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
