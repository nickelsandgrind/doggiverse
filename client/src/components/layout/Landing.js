import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  The Social Network for Dog Owners!
                </h1>
                <h4 className="">
                  {" "}
                  Create an account to share posts and connect with others.
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

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
