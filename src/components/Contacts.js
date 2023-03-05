import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_CONTACTS } from "../actions/action-types";
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

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch({ type: GET_CONTACTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
