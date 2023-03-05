import React, { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "../actions/contactAction";
import PropTypes from "prop-types";

import Contact from "./Contact";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h3 className="mb-4">
          <span className="text-danger">Contacts</span> List
        </h3>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
