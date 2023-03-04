import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1 className="text-info display-4">About</h1>
      <p className="lead">All Contacts can be listed in these app</p>
      <p className="text-secondary">Version 1.0.0</p>
      <div style={{ height: "200px" }} className="bg-light mb-3"></div>
      <Link to="/test">
        <button className="btn btn-secondary">About LifeCycle Methods</button>
      </Link>
    </div>
  );
};

export default About;
