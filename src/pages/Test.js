import React, { Component } from "react";

class Test extends Component {
  render() {
    return (
      <div>
        <h1 className="display-3">LifeCycle Methods</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>ComponentDidMount</h5>
            <p>
              The `componentDidMount()` method runs after the component output
              has been rendered to the DOM.{" "}
            </p>
          </li>
          <li className="list-group-item">
            <h5>ComponentWillMount</h5>
            <p>
              his method is used during the mounting phase of the React
              lifecycle. This function is generally called before the component
              gets loaded in the DOM tree. This method is called before the
              render() method is called, so it can be used to initialize the
              state but the constructor is preferred.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Test;
