import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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

  deleteContact = (id) => {
    console.log(id);
    const { contacts } = this.state;

    const newContacts = contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts: newContacts,
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;