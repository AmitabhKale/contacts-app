import React, { Component } from "react";
import TextInputGroup from "../components/TextInputGroup";
import { connect } from "react-redux";
import { addContact } from "../actions/contactAction";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is Required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    this.props.addContact(newContact);

    this.props.history.push("/");

    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />

            <TextInputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />

            <TextInputGroup
              label="Phone"
              type="text"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <button type="submit" className="btn btn-light btn-block">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
