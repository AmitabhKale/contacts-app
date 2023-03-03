import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: true,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4 className="d-flex">
          {name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down justify-content-center mx-3 text-info"
          ></i>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
            <div className="mt-2 d-flex justify-content-end">
              <button className="btn btn-warning mx-2">
                Edit <i className="fas fa-cut"></i>
              </button>
              <button onClick={this.onDeleteClick} className="btn btn-danger">
                Delete{" "}
                <i className="fas fa-times" style={{ fontSize: "18px" }}></i>
              </button>
            </div>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
