import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  The Social Network for Doggie Owners!
                </h1>
                <h4 className="">
                  {" "}
                  Create a profile to share posts and connect with others.
                </h4>
                <hr />
                <Link to="/register" className="btn btn-lg btn-primary mr-2">
                  SIGN UP
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
