import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-Empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    return (
      <div className="row w-100 center">
        <div className="col-md-12">
          <div className="card card-body bg-white mb-3">
            <h2 className="text-center">About Me</h2>
            <p className="lead text-center">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio yet</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
