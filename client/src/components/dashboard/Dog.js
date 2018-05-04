import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";

class Dog extends Component {
  render() {
    const dog = this.props.dog.map(dog => (
      <tr key={dog._id}>
        <td>{dog.dogname}</td>
        <td>{dog.age}</td>
        <td>{dog.breed}</td>
        <td>{dog.color}</td>
        <td>{dog.gender}</td>
        <td>
          <Moment format="MM/DD/YYYY">{dog.birthdate}</Moment>
        </td>

        <td>
          <button className="btn btn-light">Delete {dog.dogname}</button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">My Dog's</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
              <th>Color</th>
              <th>Gender</th>
              <th>DOB</th>

              <th />
            </tr>
            {dog}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(null)(withRouter(Dog));
