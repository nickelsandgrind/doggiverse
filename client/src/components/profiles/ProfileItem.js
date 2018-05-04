import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-Empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="w-75 p-3 card card-body bg-light mb-3 center">
        <div className="row">
          <div className="col-2 text-center">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              Dog owner of {profile.numberofdogs}{" "}
              {isEmpty(profile.location) ? null : (
                <span>in {profile.location}</span>
              )}
            </p>

            <Link
              to={`/profile/${profile.handle}`}
              className="btn btn-secondary"
            >
              View Profile
            </Link>
          </div>

          <div className="col-md-4 d-none d-md-block text-center">
            <h4>About Me</h4>

            <p>{profile.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
