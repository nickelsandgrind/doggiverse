import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-primary btn-lg mr-3">
        <i className="fas fa-user-edit text-light mr-1" /> Edit Your Profile
      </Link>
      <Link to="/add-dog" className="btn btn-primary btn-lg mr-3">
        <i className="fas fa-paw text-light mr-1" />
        Add A Dog
      </Link>
    </div>
  );
};

export default ProfileActions;
